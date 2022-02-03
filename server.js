const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntowort, next) => {              
    serverAntowort.render('index.ejs', {})          
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntowort, next) => {     
    
    // ... dann wird die login.ejs vom Server gerendert an den 
    // Browser zurückgegeben:

    serverAntowort.render('login.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntowort, next) => {              
    serverAntowort.render('index.ejs', {})          
})