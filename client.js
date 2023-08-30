const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.26.247.150",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Message from Snek Server:", data);
  });

  conn.on("connect", () => {
    console.log("You have been connected to Snek Multiplayer. Have fun!");
    conn.write("Name: BR");
  });

  

  return conn;
};

module.exports = { connect };
