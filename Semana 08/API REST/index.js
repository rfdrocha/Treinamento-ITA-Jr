const express = require("express") //importando express
const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const modeloUsuario = require("./models/usuario")
const { TokenExpiredError } = require("jsonwebtoken")
const app = express() //Iniciando express e passando a inicialização par variavel app
const JWTSecret = "secretJWT"

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //converter o corpo da requisição para json

mongoose.connect("mongodb://localhost:27017/treinamentoJr")
const usuario = mongoose.model("usuario",modeloUsuario)



let user = new usuario ({id:1, name:"Rafael",email:"rafael@mail.com",password:"1234"})
user.save()

user = new usuario({id:2,name:"Marcelo",email:"marcelo@mail.com",password:"4321"})
user.save()

user = new usuario({id:3,name:"ItaJr",email:"jr@mail.com",password:"jrjr"})
user.save()

//funcao que é executada antes das rotas com autenticação verificando se pode continuar
function auth(req,res,next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        //Separando o token
        const bearer = authToken.split(" ")
        const token = bearer[1]

        //verificando se o token é válido ou não
        jwt.verify(token,JWTSecret,(err,data)=>{
            if(err){
                res.status(401)
                res.json({err:"Token inválido"})
            }else{
                //Caso token seja válido

                //console.log(data)
                req.token = token
                req.loggedUser = {email: data.email,id:data.id}
            }
        })

    }else{
        res.status(401)
        res.json({err:"Token inválido"})
    }

    //console.log(authToken)
    next()
}

app.get("/produtos/:id",auth,(req,res)=>{
    res.statusCode = 200
    res.json("Rafael")
})

//Rota de autenticação na API
app.post("/auth",(req,res)=>{
    var {email,password} = req.body

    if(email!=undefined){

        usuario.find({'email':email,'password':password}).then(user =>{
            //Senha correta
            jwt.sign({email:user[0].email,id:user[0].id},JWTSecret,{expiresIn:"48h"},(err,token)=>{
                if(err){
                    res.status(400)
                    res.json({err:"Falha interna"})
                }else{
                    res.status(200)
                    res.json({token:token})
                    next()
                }
            })
        }).catch(err=>{
            //Caso não encontre o usuario ou senha incorreta
            res.status(401)
            res.json({err:"Credenciais inválidas"})
        })
    }else{
        res.status(400)
        res.json({err: "O email-enviado é innválido"})
    }
})


app.listen(3000,(erro)=>{
    if(erro){
        console.log("Ocorreu um erro!")
    } else{
        console.log("Servidor iniciado com sucesso!")
    }
})
