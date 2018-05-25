/* Exercice 1 : chrono

Créez une classe Chrono avec :

    une méthode start()

    une méthode pause()

    une méthode stop()

    une propriété currentTime

    Indices :
        setTimeout
        setInterval

    Bonus : Mesurer le temps que met le chrono pour écouler 5 min. Même chose pour 10 min. Comment réduire l'écart entre le temps affiché et le temps réel? */




function Chrono() {
  this.currentTime = 0;
  this.start = function(){
      this.currentTime++;
      console.log(this.currentTime);
  };

  this.pause = function(){
    clearTimeout(pauseToi);
    alert("fais une pause!!")
    console.log("Fais une pause!!!")    
  };

  this.stop = function(){
    clearInterval(interval);
    alert("fin du temps");
    console.log("Fin du Temps, va prendre l'air")
  };
}

function Test(){
  chrono1.start();
}
var chrono1 = new Chrono()

var interval = setInterval(Test, 1000);
var pauseToi = setTimeout(chrono1.pause, 20000);
var arret = setTimeout(chrono1.stop, 30000);



