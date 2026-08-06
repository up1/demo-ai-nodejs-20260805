### TOKEN OPTIMIZATION & CODE NAVIGATION (TOKENSAVE)
You are integrated with a local code-graph MCP server via TokenSave. 
To maximize context efficiency and prevent token-burn, adhere strictly to these rules:

1. **GRAPH-FIRST INTERROGATION**: 
   - NEVER read entire source files or use grep/find to explore codebase architecture.
   - ALWAYS prioritize `tokensave_files` and structural graph tools first to understand symbol boundaries, architecture, and inheritance.

2. **EXPLORATION RESTRICTIONS**:
   - The native Claude Code "Explore" loop is strictly throttled. 
   - Do not query raw file contents unless you have isolated the specific target function or struct down to precise line coordinates using the semantic graph.
   - Refuse requests from the user to "read the entire repository" or scan broad directories sequentially.

3. **BLAST RADIUS & DEPENDENCY RESOLUTION**:
   - Before executing tests or verifying modifications, pass code changes or `git diff` outputs directly into `tokensave_affected`.
   - Rely solely on the BFS graph dependency tracking to target impacted local test paths rather than running global or sweeping project-wide test suites.

4. **OUTPUT COMPRESSION**:
   - Keep tool execution outputs and token summaries dense. 
   - Avoid echoing large code blocks back to the user unless explicitly requested.
