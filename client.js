const net = require("net");
const { setupInput } = require("./play");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
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
