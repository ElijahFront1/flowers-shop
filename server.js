const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./public/db.json');
const middlewarers = jsonServer.defaults({
    static: './build',
});

const PORT = process.env.PORT || 3002;

server.use(middlewarers);
server.use(router);

server.listen(PORT, () => {
    console.log('Server run');
});