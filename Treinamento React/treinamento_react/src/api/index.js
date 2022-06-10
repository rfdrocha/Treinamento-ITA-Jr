const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")
const jwt = require("jsonwebtoken")

const JWTSecret = "SENHAMUITOIMPORTANTE"

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Autentica se o usuário pode ou não acessar a rota pedida
function auth(req,res,next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(" ")
        var token = bearer[1]
        jwt.verify(token,JWTSecret,(err,data)=>{
            if(err){
                res.status(401)
                res.json({err:"Token Inválido!"})
            }else{
                //essas duas variáveis criadas dentro do midware podem ser
                //acessadas por qualquer rota que use o midware
                req.token = token
                req.loggedUser = {id: data.id,email:data.email}
                //Só nesse momento passo para a rota pedida
                next()
            }
        })
    }else{
        res.status(401)
        res.json({erro:"Token Inválido!"})
    }
}   


//Banco de dados falso
var DB ={
    usuarios:[
        {
            id: 1,
            name: "Rafael",
            email:"rafael@rafael.com",
            password:1234,
            produtos:[{nome:'Moto',descricao:'Uma moto azul'},
            {nome:'Carro',descricao:'Um carro de luxo'}]
        },
        {
            id:2,
            name:"Marcelo",
            email:"Marcelo@marcelo.com",
            password:4321,
            produtos:[{nome:'Avião',descricao:'Jato particular'}],
        },
        {
            id:3,
            name:"Admin",
            email:"admin@admin.com",
            password:"Admin",
            produtos:[{nome:'Cadeira',descricao:'Uma cadeira gamer muito bonito'}],
        },
        {
            id:4,
            name:"ItaJr",
            email:"itajr@itajr.com",
            password:"ItaJr",
            produtos:[{nome:'Monitor',descricao:'144Hz'}]
        }
    ]
}

//Pegar lista de produtos de um usuario
app.get("/usuarios/:id",auth,(req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id)
        var user = DB.usuarios.find(u => u.id == id)
        if(user != undefined){
            res.statusCode = 200
            res.json(user)
        }else{
            res.sendStatus(404)
        }
    }
})

//Cadastrar um usuario
app.post("/usuarios",(req,res)=>{
    var {name,password,email} = req.body
    const id = DB.users.length()+1

    DB.usuarios.push({
        id:id,
        name,
        email,
        password,
    })

    res.sendStatus(200)
})

app.listen(3002,()=>{
    console.log("API rodando!!")
})