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

  return conn;
};

module.exports =
{
  connect
};
