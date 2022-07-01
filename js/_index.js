/* *** VARIABLES *** */

const tokens = ["scissors", "paper", "rock", "lizard", "spock"];



/* *** FONCTIONS *** */

async function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/*Ne fonctionne pas:

async function createTokens (tokens) {
    var tokenLst = document.getElementById("token__form");
    for (token of tokens) {
        let tokenCapitalized = await capitalize(token);
        let tokenElt = document.createElement("li");
        tokenElt.setAttribute("class", "token " + token);
        tokenElt.setAttribute("id", token);

        let tokenEltImg = document.createElement("img");
        tokenEltImg.setAttribute("src", "./images/icon-" + token + ".svg");
        tokenEltImg.setAttribute("alt", tokenCapitalized);

        tokenLst.appendChild(tokenElt);
        tokenElt.appendChild(tokenEltImg);
    }
}
*/



/* *** ACTIONS *** */

(async function() {
    //var newTokens = await createTokens(tokens);

    
}) ()

    
/* MODAL RÈGLES */
var rulesBtn = document.getElementById("rules-button");
var rulesExit = document.getElementById("rules-exit");
var modal = document.getElementById("modal-rules");


/* Ouverture */
    rulesBtn.addEventListener("click", function(e) {
        //console.log("Ouverture des règles.");
        modal.style.display = "flex";
    }) ;


/* Fermeture */
    rulesExit.addEventListener("click", function(e) {
        //console.log("Sortie des règles.");
        modal.style.display = "none";
    });
    window.addEventListener("click", function(e) {
        if(e.target == document.querySelector('body')){
            modal.style.display = "none";
        }
    });

