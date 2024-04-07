//en esta caprta se manejara el servidor
import express from 'express'
import path from 'path'

export const startServer = (options) => {
    const { port, public_path = 'public'} = options
    
    const app = express()


    //Para usar middlewares se usa la palabra use(express)
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible para que se uitilice

    app.get('*',(req, res)=>{
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port,()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })
}

