const net = require("net");
const { IP, PORT } = require("./constants");
const { setupInput } = require("./input");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Message from Snek Server:", data);
  });

  conn.on("connect", () => {
    console.log("You have been connected to Snek Multiplayer. Have fun!");
    conn.write("Name: Brett");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });



  return conn;
};

module.exports = { connect };
