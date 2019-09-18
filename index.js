const server = require("./api/server");

const port = process.env.port || 5555;

server.listen(port, () => console.log(`running on port ${port}`));
