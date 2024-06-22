// var http = require("http")
const express = require("express")
const app = express()
const create = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./persitence/Post')
const util = require('./utl/util')
// http.createServer(function(req, res){
//     res.end("<h1>Hello World<h1>")
// }).listen(8081)
// app.get("js/script.js", function(req, res){
//     res.sendFile(__dirname + "/view/js/script.js")
// })
// app.get("/ola/:nome/:cargo", function(req, res){
//     res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Cargo " + req.params.cargo)
// })
// hanlebars
const port = 8082
app.engine('handlebars', create.engine({
    helpers: {
        foo() { return 'FOO!'; },
        bar() { return 'BAR!'; },
        formatTimestamp: (data) => {
            return moment(data).format('YYYY-MM-DD HH:mm:ss')
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    Post.findAll().then(function (lista) {
        lista.forEach(item => {
            item.dataValues.createdAt = util.formatarTimestamp(item.dataValues.createdAt)
            item.dataValues.updatedAt = util.formatarTimestamp(item.dataValues.updatedAt)
        });
        res.render('home', { lista: lista })
    })
})
app.get('/cad', function (req, res) {
    res.render('cad')
})
app.post('/add', function (req, res) {
    Post.create({
        nome: req.body.txtNome,
        idade: req.body.numIdade
    }).then(function () {
        res.redirect("/")
    }).catch(function (erro) {
        res.send("Erro ao Criar Usuario " + erro)
    })
})
app.get('/deletar/:id', function (req, res) {
    Post.destroy({where: {'id': req.params.id}}).then(function() {
        alert("REGISTRO DELETADO");
        res.render('cad')
    }).catch(function(erro) {
        alert("REGISTRO DELETADO");
        res.send('erro')
    })
})
app.listen(port, () => {
    console.log(`Conectado...\n http://127.0.0.1:${port}\n http://localhost:${port}`)
})