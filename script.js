var character = {
  health: 40,
  healsRemaining: 2,
  wins: 0,
  generateAttackDamage: function(){
   return Math.floor(Math.random() * 3 + 1);
  },
  heal: function(){
    this.healsRemaining--;
    return Math.floor(Math.random() * 10 + 1);
  }

}

//character.health-= grant.generateAttackDamage();
//character.heal()

var grant = {
  name: grant,
  health: 10,
  generateAttackDamage: function(){
    return Math.floor(Math.random() * 5 + 1);

  },


}
function startgame() {
  var wanttoplay = prompt("Do you want to play?"); //ask the user if they want to play
  if (wanttoplay === "yes") { // play, if they want to
     character.name = prompt("What is your name?"); // get the user name
    console.log("Username: " + character.name);
    startcombat();
  }

  function startcombat() {
    while (character.health > 0 && grant.health >= 0 && grant.health > 0) { // while everyone is alive, do this
      console.log(character.name + " has " + character.health + " health left."); // log user health
      console.log("Grant the Mighty Chicken has " + grant.health + " health left."); // log Grant health

      var wanttoattack = prompt("Do you want to attack, heal, or quit?");
      if (wanttoattack === "quit") {
        break;
      } else if (wanttoattack.toLowerCase() === "heal" && character.healsRemaining > 0) {
        character.health += character.heal();
      } else {
        character.health -= character.generateAttackDamage();
        grant.health -= grant.generateAttackDamage();
      }


      //character.health -= character.generateAttackDamage(); // subract damage from the user health
      //grant.health -= grant.generateAttackDamage(); // subract damage from grant's health
      // evaluate if everyone is still alive below
      if (grant.health <= 0 && character.health <= 0 && character.wins === 3) { // did you both die?
        console.log("You both died."); // then do this
      } else if (grant.health <= 0) { // did Grant die?
        console.log("Grant Died");
        character.wins++;
        if (character.wins < 3) { // does he have any extra lives?

          character.wins++; // use an extra life
          grant.health = 10; // reset Grant's health
        } else {
          console.log("You have defeated Grant."); // no extra lives
          console.log("You have " + character.wins + " wins."); // game over, you win
        }
      } else if (character.health <= 0) { // user dies, bummer
        console.log("You died. Bummer.");
        console.log("Grant wins. Good for Grant.");
      }
    }
  }
}





startgame();
