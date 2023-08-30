const { builtinModules } = require("module");
const {connect} = require("./client");

console.log("Connecting ...");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(data) {
    if (data === "\x1B[A") {
      return "Move: up";
    }
    if (data === "\x1B[B") {
      return "Move: down";
    }
    if (data === "\x1B[D") {
      return "Move: left";
    }
    if (data === "\x1B[C") {
      return "Move: right";
    }
    if (data === "\x03") {
      process.exit();
    }
  };
  

  stdin.on("data", (data => {
    const userInputResult = handleUserInput(data);
  }));

  return stdin;
};

connect();
setupInput();

module.exports = {setupInput};