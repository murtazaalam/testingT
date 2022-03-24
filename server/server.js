import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../src/App';

const PORT = 8192
const app = express()

const router = express.Router()

app.use('./build', express.static('build'));

app.get('^/$', (req, res, next) => {
    const context = {}
    const app = ReactDomServer.renderToString(<App/>
        // <StaticRouter location={req.url} context={context} >
        //     <App/>
        // </StaticRouter>
    );
    const indexFile = path.resolve('./build/index.html')
    fs.readFile(indexFile, 'utf8', (err, data) => {
        console.log(">>>>>",data)
        if(err){
            console.log("Error !")
            return res.status(500).send("Oops!","Error! Something went worng")
        }
        
        return res.send(data.replace('<div id="root"></div>',`<div id="root">${app}</div>`))
    })
})

router.use(express.static(path.resolve(__dirname, '..', 'build'),{maxAge: '10d'}))
app.use(router)
app.listen(PORT, () => {
    console.log("SSR Port is : ",PORT);
})