console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz: es soll verhindert werden, dass Daten wie Handynummer oder Adresse missbraucht werden
// 
// Datensicherheit: Umfasst jede Art der Sicherung von digitalen als auch analogen Daten vor dem Zugriff unbefugter
//
//
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// symmetrisch: nur ein Schlüssel mit (dem kodiert und dekodiert wird) ist definiert
// Vorteile: Schnelle Berechenbarkeit, Möglichkeit die Sicherheit durch die Art des Schlüssels zu definieren
// 
// 
// asymmetrisch: durch ein Schlüsselpaar definiert: Public und private key,
// Vorteile: Hohe Sicherheit wegen der schwer lösbaren mathematischen Probleme, Problem des Schlüsselaustauschs wird umgangen
// Public Key: zum versenden der Datei
// private Key: zum Empfangen und Öffnen der Datei
// 
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// so wie der Boxcryptor da:
// Schnelligkeit der symmetrischen Verschlüsselung und  die Sicherheit der Asymmetrischen Verschlüsselung
// 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Deklaration: erstellt eine Klasse für ein Objekt
//
// Instanziierung: Dem server wird eine neue Instanz zugeteilt
//
// Initialisierung: Den Eigenschaften werden Werte zugeteilt
//
// 
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnisse{
    constructor(){
        this.Vorname
        this.Nachname
        this.Fehlstunden
        this.UnentschuldigteFehlstunden
        this.Versetzung
    }
}







// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
//
let zeugnisse = new Zeugnisse()

zeugnisse.Vorname = "Pit"
zeugnisse.Nachname = "Kiff"
zeugnisse.Fehlstunden = "35"
zeugnisse.UnentschuldigteFehlstunden = "0"
zeugnisse.Versetzung = "versetzt"




// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

console.log("Vorname:"+ zeugnisse.Vorname)
console.log("Nachname:"+ zeugnisse.Nachname)
console.log("Fehlstunden:"+ zeugnisse.Fehlstunden)
console.log("Unentschuldigte Fehlstunden:"+ zeugnisse.UnentschuldigteFehlstunden)
console.log ("Versetzung:"+ zeugnisse.Versetzung)



// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

class ZeugnisPit{
    constructor(){
        this.Mathe
        this.Englisch
        this.Deutsch
    }
}

class ZeugnisGit{
    constructor(){
        this.Mathe
        this.Englisch
        this.Deutsch
    }
}

let zeugnisPit = new ZeugnisPit()
let zeugnisGit = new ZeugnisGit()

zeugnisPit.Mathe = 15
zeugnisPit.Deutsch = 10
zeugnisPit.Englisch = 5

zeugnisGit.Mathe = 10
zeugnisGit.Deutsch = 8
zeugnisGit.Englisch = 15


if(zeugnisPit.Mathe + zeugnisPit.Deutsch + zeugnisPit.Englisch == zeugnisGit.Mathe + zeugnisGit.Deutsch + zeugnisGit.Englisch){
    console.log("Pit gleich Git")
}else{
    if(zeugnisPit.Mathe + zeugnisPit.Deutsch + zeugnisPit.Englisch > zeugnisGit.Mathe + zeugnisGit.Deutsch + zeugnisGit.Englisch){
        console.log("Pit hat das bessere Zeugnis")
    }else{
        console.log("Git hat das bessere Zeugnis")
    }
}


