// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte, 
// wie z.B. Kunde, Konto, Filiale, Bankautomat, ...
// Alle Kunden unserer Bank haben dieselben EIgenschaften,
// aber unterschiedliche Eigenschaftswerte

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
    }
}

// Von der Kunden-Kasse wird eine konkrete Instanz gebildet

let kunde=new Kunde()

// Die konkrete INstanz bekommt Eigenschaftswerte zugewiesen

kunde.IdKunde = 123456
kunde.Nachname = "Genau"
kunde.Vorname = "Ehhh"
kunde.Geburtsdatum = "20.08.2003"
kunde.Kennwort = "Gotcha"
kunde.Mail = "WhatAreYouDoing@online.de"




const express = require('express')
const bodyParser = require('body-parser')
const { home } = require('nodemon/lib/utils')
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

meineApp.post('/login',(browserAnfrage, serverAntowort, next) => {              
   const idKunde = browserAnfrage.body.IdKunde
   const kennwort = browserAnfrage.body.Kennwort

    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)

    if(idKunde == Kunde.idKunde) {
    serverAntowort.render('index.ejs', {})
    }

    serverAntowort.render('login.ejs', {})          
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