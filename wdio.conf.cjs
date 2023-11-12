const os = require("os")
const path = require("path")
const { spawn } = require("child_process")

// keep track of the `tauri-driver` child process
let tauriDriver

// https://webdriver.io/docs/configurationfile/
exports.config = {
  specs: ['./**/*.e2e.js'],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      'tauri:options': {
        application: os.platform() === "win32" ? './src-tauri/target/debug/rpg-storymaker.exe' : './src-tauri/target/debug/rpg-storymaker'
      },
    },
  ],
  reporters: ['spec'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  // ensure we are running `tauri-driver` before the session starts so that we can proxy the webdriver requests
  beforeSession: () => {
    tauriDriver = spawn(
      path.resolve(os.homedir(), '.cargo', 'bin', 'tauri-driver'),
      [],
      { stdio: [null, process.stdout, process.stderr] }
    )
  },

  // clean up the `tauri-driver` process we spawned at the start of the session
  afterSession: () => tauriDriver.kill(),
}
