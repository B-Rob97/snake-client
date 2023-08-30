const { conn } = require("./play");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  const handleUserInput = function(data) {
    if (data === "w") {
      connection.write("Move: up");
    }
    if (data === "s") {
      connection.write("Move: down");
    }
    if (data === "a") {
      connection.write("Move: left");
    }
    if (data === "d") {
      connection.write("Move: right");
    }
    if (data === "\x03") {
      process.exit();
    }
    if (data === "1") {
      connection.write("Say: Woohoo");
    }
    if (data === "2") {
      connection.write("Say: Wow!");
    }
  };
  

  stdin.on("data", (data => {
    handleUserInput(data);
  }));

  stdin.resume();

  return stdin;
};

module.exports = {setupInput};