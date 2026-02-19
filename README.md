# ISS Tracker — Simple MCP Server

A minimal MCP server with one tool: ask where the International Space Station is right now.

No API keys needed. The ISS tracking API is free and open.

## Setup

```bash
git clone https://github.com/JasonMakes801/iss-mcp-simple.git
cd iss-mcp-simple
npm install
npm run build
```

## Connect to Claude Desktop

Open your Claude Desktop config file:

- **Mac:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Add this to the `mcpServers` section (replace the path with your actual path):

```json
{
  "mcpServers": {
    "iss-tracker": {
      "command": "node",
      "args": ["/full/path/to/iss-mcp-simple/dist/index.js"]
    }
  }
}
```

Restart Claude Desktop.

## Test it

Open Claude Desktop and ask:

> Where is the ISS right now?

You should get back live coordinates, altitude, and velocity — real data from the satellite tracking API, not a memorized answer.

## What this demonstrates

This is an MCP server. It gives your AI a tool it can call to get live data. The AI doesn't know where the ISS is — but it knows it has a tool that does.

One tool, one API, one answer. The pattern scales to any data source.
