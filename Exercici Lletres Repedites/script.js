//Exercici Lletres Repetides

/*
L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
    - Crea un array amb el teu nom on cada posició correspongui a una lletra.
    - Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.
*/

function arrayNom() {
    let nom, arrayNom, i;
    nom = document.getElementById("nomFase1").value.toUpperCase();
    arrayNom = nom.split('');
    for (i = 0; i < arrayNom.length; i++){
        console.log(arrayNom[i]);
    }
}

/*
FASE 2
    - Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
    - Si trobes un numero, mostra per pantalla: ‘Els noms de persones no contenen el número: __’.
*/

function arrayVocal() {
    let nom, arrayNom, i;
    nom = document.getElementById("nomFase2").value.toUpperCase();
    arrayNom = nom.split('');
    for (i = 0; i < arrayNom.length; i++){
        if(arrayNom[i] == "a" || arrayNom[i] == "e" || arrayNom[i] == "i" || arrayNom[i] == "o" || arrayNom[i] == "u"){
            console.log("He trobat la VOCAL: " + arrayNom[i]);
        } else if (isNaN(arrayNom[i]) == false){
                console.log("Els noms de persones no contenen el número: " + arrayNom[i]);
                } else{
                    console.log("He trobat la CONSONTANT: " + arrayNom[i]);
                    }
    }
}

/*
FASE 3
    - Emmagatzemar en un Map tant les lletres de la llista (o array) com el nombre de vegades que apareixen
*/

function arrayComptar() {
    var freq = {};
    let nom, i, lletra;
    nom = document.getElementById("nomFase3").value.toUpperCase();
    for (i=0; i<nom.length;i++) {
        lletra = nom.charAt(i);
        if (freq[lletra]) {
           freq[lletra]++;
        } else {
           freq[lletra] = 1;
        }
    }
    console.log(freq);
}

/*
FASE 4
    - Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.
    - Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. 
    És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName.
*/
var arrayNom = [];

function arrayNomCognom() {
    let nom, cognom, lletra;
   
    nom = document.getElementById("nomFase4").value.toUpperCase();
    cognom = document.getElementById("cognomFase4").value.toUpperCase();
    nomCognom = nom + " " + cognom;
    for (i=0; i<nomCognom.length;i++) {
        lletra = nomCognom.charAt(i);
        arrayNom.push(lletra);
        
    }console.log(arrayNom);   
}