# Playground Project for testing projen with Node
1. Initialize with "npx projen new node"
2. Tweak ".projenrc.js" accordingly to play around.
3. Run "npx projen" to synth your changes. 
4. Dummy server.mjs file added under src/ to simulate application code.
5. https://projen.io/node.html#dependency-upgrades --> this is the docs I looked on.
6. Tasks are available under .projen/tasks.json. They can be called via CLI as "npx projen build/release/upgrade"
7. Release, build and upgrade tasks have out-of-the-box workflows for automation.