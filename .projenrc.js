const { javascript } = require("projen");
const project = new javascript.NodeProject({
  defaultReleaseBranch: "main",
  name: "projen-node",

  minNodeVersion: "14.0.0",
  workflowNodeVersion: "18.1.0", // defaults to minNodeVersion
  depsUpgrade: true, // that one line translates into a whole workflow of upgrade-main.yml
  workflow: true

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();