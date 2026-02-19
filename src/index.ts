import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "iss-tracker",
  version: "1.0.0",
});

interface ISSPosition {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  timestamp: number;
}

server.tool("where_is_iss", "Get the current position of the International Space Station", async () => {
  const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");

  if (!response.ok) {
    return {
      content: [{ type: "text", text: `API error: ${response.status} ${response.statusText}` }],
      isError: true,
    };
  }

  const iss: ISSPosition = await response.json();

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            latitude: iss.latitude,
            longitude: iss.longitude,
            altitude_km: Math.round(iss.altitude),
            velocity_kmh: Math.round(iss.velocity),
            visibility: iss.visibility,
            timestamp: new Date(iss.timestamp * 1000).toISOString(),
          },
          null,
          2
        ),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main();
