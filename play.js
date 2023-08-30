const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", () => {
    console.log("Data recieved from server:", data);
  })

   conn.on("connect", () => {
    console.log("Hello from Brett's client!");
  })

  return conn;
};

console.log("Connecting ...");
connect();