const express = require("express") //importando express
const app = express() //Iniciando express e passando a inicialização par variavel app
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //converter o corpo da requisição para json

var DB ={
    usuarios:[
        {
            id: 1,
            nome: "Rafael",
            idade:26,
            produtos: [{nome:'mochila', preco:150}],
        },
        {
            id: 2,
            nome: "Rogério",
            idade:20,
            produtos: [{nome:'caderno', preco:25}],
        },
        {
            id: 3,
            nome: "Bruno",
            idade:20,
            produtos: [{nome:'lápis', preco:1.5}],
        },
        {
            id: 4,
            nome: "Matheus",
            idade:18,
            produtos: [{nome:'mochila', preco:150}],
        },
    ]
}

//Pegar a lista de todos os usuarios
app.get("/usuarios",(req,res)=>{
    res.statusCode = 200
    res.json(DB.usuarios)
})

//Pegar a lista de produtos de um usuário pelo id
app.get("/usuario/produtos/:id",(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var usuario = DB.usuarios.find(u => u.id == id)
        if(usuario != undefined){
            res.statusCode = 200
            res.json(usuario.produtos)
        }else{
            res.sendStatus(404)
        }
    }
})

//Cadastrar um usuario
app.post("/usuarios",(req,res)=>{
    var {nome,idade} = req.body
    const id = DB.usuarios.length +1

    DB.usuarios.push({
        id: id,
        nome,
        idade,
        produtos:[]
    })

    res.sendStatus(200)
})

//Adicionar um produto ao usuário
app.put('/usuario/produto/:id',(req,res)=>{
    var {nome,preco} = req.body
    const produto = {nome,preco}
    const index = req.params.id-1

    DB.usuarios[index].produtos.push(produto);

    res.sendStatus(200)
})


//Deletar um usuário do banco de dados
app.delete("/usuario/:id",(req,res)=> {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var index = DB.usuarios.findIndex(u=>u.id == id)
        
        if(index == -1){
            res.sendStatus(404)
        }else{
            DB.usuarios.splice(index,1)
            res.sendStatus(200)
        }
    }
})

app.listen(3000,(erro)=>{
    if(erro){
        console.log("Ocorreu um erro!")
    } else{
        console.log("Servidor iniciado com sucesso!")
    }
})
