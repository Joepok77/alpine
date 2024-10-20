var questionTxt = document.getElementById("questionTxt");
var reponse1 = document.getElementById("reponse1");
var reponse2 = document.getElementById("reponse2");
var reponse3 = document.getElementById("reponse3");
var reponseCorrectElement = document.getElementById("obj199");
var recommencer = document.getElementById("recommencer");
var commencer = document.getElementById("commencer");
var labelCompteurMauvaisReponse = document.getElementById("labelCompteurMauvaisReponse");
var labelCompteurBonneReponse = document.getElementById("labelCompteurBonneReponse");
var reponse_correct1 = document.getElementById("reponse_correct1");
var reponse_correct2 = document.getElementById("reponse_correct2");
var reponse_correct3 = document.getElementById("reponse_correct3");
var reponse_incorrect1 = document.getElementById("reponse_incorrect1");
var reponse_incorrect2= document.getElementById("reponse_incorrect2");
var reponse_incorrect3= document.getElementById ("reponse_incorrect3");
var rectangleVide1 = document.getElementById("obj270");
var rectangleVide2 = document.getElementById("obj274");
var rectangleVide3 = document.getElementById("obj276");
var coeur1 = document.getElementById("obj389_img");
var coeur2 = document.getElementById("obj393_img");
var coeur3 = document.getElementById("obj395_img");
var coeur4 = document.getElementById("obj397_img");
var coeur5 = document.getElementById("obj399_img");
var coeur6 = document.getElementById("obj401_img");
var coeur7 = document.getElementById("obj403_img");
var coeur8 = document.getElementById("obj405_img");
var coeur9 = document.getElementById("obj407_img");
var coeur10 = document.getElementById("obj391_img");
 



Tab_Phrases_3[1] = new Array("1", 'Traduis "corner" en français.', 'a', 'coin', 'pièce', 'angle');
Tab_Phrases_3[2] = new Array("2", 'Traduis "silent" en français.', 'a', 'silencieux', 'muet', 'tranquille');
Tab_Phrases_3[3] = new Array("3", 'Traduis "current" en français.', 'a', 'courant', 'actuel', 'flux');
Tab_Phrases_3[4] = new Array("4", 'Traduis "bottle" en français.', 'a', 'bouteille', 'flacon', 'récipient');
Tab_Phrases_3[5] = new Array("5", 'Traduis "presume" en français.', 'b', 'supposer', 'présumer', 'estimer');
Tab_Phrases_3[6] = new Array("6", 'Traduis "visitor" en français.', 'a', 'visiteur', 'invité', 'hôte');
Tab_Phrases_3[7] = new Array("7", 'Traduis "local" en français.', 'a', 'local', 'endroit', 'régional');
Tab_Phrases_3[8] = new Array("8", 'Traduis "novel" en français.', 'a', 'roman', 'nouveauté', 'original');
Tab_Phrases_3[9] = new Array("9", 'Traduis "advance" en français.', 'a', 'avance', 'progrès', 'retourner');
Tab_Phrases_3[10] = new Array ("10", 'Traduis "content" en français.', 'a', 'contenu', 'satisfait', 'sujet');
Tab_Phrases_3[11] = new Array ("11", 'Traduis "exciting" en français.', 'a', 'excitant', 'passionnant', 'stimulant');
Tab_Phrases_3[12] = new Array ("12", 'Traduis "divide" en français.', 'a', 'diviser', 'séparer', 'partager');
Tab_Phrases_3[13] = new Array ("13", 'Traduis "refrain" en français.', 'a', 'refrain', 's\'abstenir', 'refrain');
Tab_Phrases_3[14] = new Array ("14", 'Traduis "peculiar" en français.', 'a', 'particulier', 'étrange', 'spécial');
Tab_Phrases_3[15] = new Array ("15", 'Traduis "effective" en français.', 'b', 'effectif', 'efficace', 'effectuer');
Tab_Phrases_3[16] = new Array ("16", 'Traduis "dangerous" en français.', 'a', 'dangereux', 'risqué', 'périlleux');
Tab_Phrases_3[17] = new Array ("17", 'Traduis "obvious" en français.', 'a', 'évident', 'clair', 'flagrant'); if(compteur === 0){
    reponse1.style.display = "block";  
    reponse2.style.display = "block";  
    reponse3.style.display = "block";
    commencer.style.display = "none";  
    fond_question_suivante.style.display = "none";  
    rectangleVide1.style.visibility = "hidden";
    rectangleVide2.style.visibility = "hidden";
    rectangleVide3.style.visibility = "hidden";
    
}
  
    if (compteur < 10) {
        
    var question = getRandomInt(1, 100);
    if (niveau == "facile"){
    questionTxt.innerHTML = Tab_Phrases_1[question][1];
    reponse1.innerHTML = Tab_Phrases_1[question][3];
    reponse2.innerHTML = Tab_Phrases_1[question][4];
    reponse3.innerHTML = Tab_Phrases_1[question][5];
  //  reponseCorrect.innerHTML = Tab_Phrases[question][2];

    localStorage.setItem("reponseCorrectStorage", Tab_Phrases_1[question][2])
localStorage.setItem("reponseCorrectStorage", Tab_Phrases_3[question][2]);
        
        
}
compteur++;
localStorage.setItem("compteur", compteur);


commencer.style.display = "none"; // Masquer le bouton "Commencer"

        
   commencer.addEventListener("click", function() {
    rectangleVide1.style.visibility = "hidden";
    rectangleVide2.style.visibility = "hidden";
    rectangleVide3.style.visibility = "hidden";
    fond_question_suivante.style.display = "none";  
});

 
reponse1.addEventListener("click", function() {
rectangleVide1.style.visibility = "visible";
rectangleVide2.style.visibility = "visible";
rectangleVide3.style.visibility = "visible";
commencer.style.display = "block";// Afficher le bouton "Commencer"
fond_question_suivante.style.display = "block";  
});

reponse2.addEventListener("click", function() {
rectangleVide1.style.visibility = "visible";
rectangleVide2.style.visibility = "visible";
rectangleVide3.style.visibility = "visible";
commencer.style.display = "block"; 
fond_question_suivante.style.display = "block";  
});

reponse3.addEventListener("click", function() {
rectangleVide1.style.visibility = "visible";
rectangleVide2.style.visibility = "visible";
rectangleVide3.style.visibility = "visible";
commencer.style.display = "block"; 
fond_question_suivante.style.display = "block";  
});


} else  {
questionTxt.innerHTML = "TERMINÉ vous avez" + compteurBonneReponse + "/ 20";

reponse1.style.display = "none"; // 
reponse2.style.display = "none"; // 
reponse3.style.display = "none"; // 
commencer.style.display = "none";
rectangleVide1.style.visibility = "hidden";
rectangleVide2.style.visibility = "hidden";
rectangleVide3.style.visibility = "hidden";
recommencer.style.display = "block";


}