// Klausur 
// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
let prozentpunkteSPD = 47
let prozentpunkteCDU = 53
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.
// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:
if(prozentpunkteCDU > prozentpunkteSPD){
    console.log("Die CDU hat gewonnen.")
}else{
    console.log("Die CDU hat nicht gewonnen.")
}


console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 
let einnahmen = 1000000
let ausgaben = 900000 

if(einnahmen-ausgaben){
    console.log("Das Unternehmen hat Gewinn gemacht.")
}else{
    console.log("Das Unternehmen hat Verlust gemacht.")
}

console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:
class Samsung{
    constructor(){
        this.Preis
        this.Größe
        this.Speicher
        this.Auflösung
    }
}

class Apple{
    constructor(){
        this.Preis
        this.Größe
        this.Speicher
        this.Auflösung
    }
}
// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:
let samsung = new Samsung()
let apple = new Apple()

// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:
samsung.Preis = "450€"
samsung.Größe = "12cm"
samsung.Speicher = "128GB"
samsung.Auflösung = "4K"

apple.Preis = "800€"
apple.Größe = "13cm"
apple.Speicher = "128GB"
apple.Auflösung = "4K"
// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:
if(apple.Größe > samsung.Größe){
    console.log("Apple ist größer als Samung.")
}else{
    console.log("Apple ist kleiner als Samsung. ")
}

console.log("Aufgabe 4")
console.log("Ist erledigt")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.
console.log("Aufgabe 5")
// In Ihrer Banking-App Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks