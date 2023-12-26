const { javascript } = require("projen");
const project = new javascript.NodeProject({
  defaultReleaseBranch: "main",
  name: "projen-node",

  minNodeVersion: "14.0.0",
  workflowNodeVersion: "20.1.0", // defaults to minNodeVersion
  depsUpgrade: true, // that one line translates into a whole workflow of upgrade-main.yml
  workflow: true,
  packageManager: javascript.NodePackageManager.NPM,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const hello_1 = project.addTask('hello_1');
hello_1.exec('echo hello_1, world!');

const hello_2 = project.addTask('hello_2', {
  description: 'say hello_2',
  exec: 'echo hello_2, world!'
});

project.synth();