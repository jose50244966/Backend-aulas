import http from 'http';

const PORT = 3000;

const rotas = {
    "/": "Projeto api clientes pagina principal",
    "/clientes" : "Pagina do clientees"
}
const server = http.createServer((req ,res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end(rotas[req.url]);
})

server.listen(PORT, ()=> console.log(`Escutando a porta ${PORT}`));