//ETAPE 1 : demander un nombre à un utilisateur via un prompt puis stocker le résultat dans une variable

let givenNumber = Number(prompt("Bonjour, choisissez un nombre pour tenter de deviner le nombre mystère !"));

//console.log(givenNumber);

//ETAPE 2 : Considérons que le nombre à deviner est 22
  /* Ecrire une fonction appellée didWin qui prend en paramètre givenNumber et si :
    - le nombre est plus petit que 22 on affiche "Plus grand"
    - le nombre est plus grand on affiche "plus petit"
    - si l'utilisateur entre le nombre 22 on affiche : "Bravo ! Vous avez deviné le nombre !" 
    Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.*/

/*     function didWin(givenNumber){
      if(givenNumber<22){
        alert('Plus grand');

      }
      else if(givenNumber >22){
        alert('Plus petit');
      }
      else {
        alert('Bravo ! Vous avez deviné le nombre !');
      }
      }


    function gamePlay(){
      didWin(givenNumber);
    }
    gamePlay(); */
    

    /*ETAPE 3 : Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
    Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.*/

    function didWin(givenNumber ){
      while(givenNumber!=22){
        if(givenNumber<22){
          alert('Plus grand');
          givenNumber = Number(prompt("Désolé ce n'est pas le bon nombre ! Essaie encore "));
        }
        else if(givenNumber >22){
          alert('Plus petit');
          givenNumber = Number(prompt("Désolé ce n'est pas le bon nombre ! Essaie encore "));
        }
        else {
          alert('Bravo ! Vous avez deviné le nombre !');
        }
      
      }

      }
      
    function gamePlay(){
      didWin(givenNumber);
    }
    gamePlay();
