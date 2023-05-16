const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const cors = require('cors');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0",
    "routes": {
      "cors": {
          "origin": ["http://0.0.0.0:5000"],
          "headers": ["Accept", "Content-Type"],
          "additionalHeaders": ["X-Requested-With"]
      }
  }
  });

  // server.route({
  //   method: "GET",
  //   path: "/",
  //   handler: (request, h) => {
  //     return "Success!";
  //   },
  // });

  server.route(routes.routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
init();