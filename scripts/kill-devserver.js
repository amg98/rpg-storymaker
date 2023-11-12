import { execSync } from 'child_process';
import os from "os";

const portToKill = 1420;

let command;
if (os.platform() === 'win32') {
  command = `powershell -Command "Get-Process -Id (Get-NetTCPConnection -LocalPort ${portToKill}).OwningProcess | Stop-Process -Force"`;
} else {
  command = `fuser -k ${portToKill}/tcp`;
}

execSync(command)
