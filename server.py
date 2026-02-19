from mcp.server.fastmcp import FastMCP
import urllib.request
import json

mcp = FastMCP("iss-tracker")


@mcp.tool()
def where_is_iss() -> str:
    """Get the current position of the International Space Station"""
    with urllib.request.urlopen(
        "https://api.wheretheiss.at/v1/satellites/25544"
    ) as response:
        iss = json.loads(response.read())

    return json.dumps(
        {
            "latitude": iss["latitude"],
            "longitude": iss["longitude"],
            "altitude_km": round(iss["altitude"]),
            "velocity_kmh": round(iss["velocity"]),
            "visibility": iss["visibility"],
        },
        indent=2,
    )


if __name__ == "__main__":
    mcp.run()
