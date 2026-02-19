# ISS Tracker — Simple MCP Server

A minimal MCP server with one tool: ask where the International Space Station is right now.

No API keys needed. The ISS tracking API is free and open.

## The Easy Way (Claude Code)

If you have [Claude Code](https://docs.anthropic.com/en/docs/claude-code), just tell it:

> Clone the repo at github.com/JasonMakes801/iss-mcp-simple. Set up a Python virtual environment, install the dependencies, and configure it as an MCP server in Claude Desktop. Test that it works.

Claude Code will handle everything.

## Manual Setup

```bash
git clone https://github.com/JasonMakes801/iss-mcp-simple.git
cd iss-mcp-simple
python3 -m venv .venv
source .venv/bin/activate    # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Add to Claude Desktop config (`~/Library/Application Support/Claude/claude_desktop_config.json` on Mac):

```json
{
  "mcpServers": {
    "iss-tracker": {
      "command": "/full/path/to/iss-mcp-simple/.venv/bin/python",
      "args": ["/full/path/to/iss-mcp-simple/server.py"]
    }
  }
}
```

Restart Claude Desktop and ask: "Where is the ISS right now?"

## What it does

One tool (`where_is_iss`) calls the [Where The ISS At](https://wheretheiss.at) API and returns live coordinates, altitude, velocity, and visibility. Claude interprets the data and answers in plain English.

Companion repo for [Intentional AI](https://intentionalai.substack.com).
