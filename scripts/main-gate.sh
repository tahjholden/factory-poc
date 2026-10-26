#!/usr/bin/env bash
# Main-only gate: simulates a failure that PR checks cannot see.
if [ -e BREAK_MAIN ]; then echo "main-gate: BREAK_MAIN present" >&2; exit 1; fi
echo "main-gate: ok"
