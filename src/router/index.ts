import express from 'express'

const server = express()
const routes = ['user']

routes.forEach((route) => {
    import(`./${route}`)
    .then((obj)=>{
        server.use(`/${route}`, obj.default)
    })
    .catch((err)=>{
        console.log("Erro ao importar rota: " + route)
    })
})

export default server