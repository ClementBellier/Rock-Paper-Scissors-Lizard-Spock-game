"use strict";

/* *** VARIABLES *** */
var tokens = ["scissors", "paper", "rock", "lizard", "spock"];
/* *** FONCTIONS *** */

function capitalize(str) {
  return regeneratorRuntime.async(function capitalize$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", str.charAt(0).toUpperCase() + str.slice(1));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}
/*Ne fonctionne pas:

async function createTokens (tokens) {
    var tokenLst = document.getElementById("token__list");
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


(function _callee() {
  var newTokens;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(createTokens(tokens));

        case 2:
          newTokens = _context2.sent;

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
})();
//# sourceMappingURL=_index.dev.js.map
