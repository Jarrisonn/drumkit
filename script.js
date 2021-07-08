


document.addEventListener("keydown", function(e){
    let clap = document.getElementsByTagName("audio")[0];
    let hihat = document.getElementsByTagName("audio")[1];
    let kick = document.getElementsByTagName("audio")[2];
    let openhat = document.getElementsByTagName("audio")[3];
    let boom = document.getElementsByTagName("audio")[4];
    let ride = document.getElementsByTagName("audio")[5];
    let snare = document.getElementsByTagName("audio")[6];
    let tom = document.getElementsByTagName("audio")[7];
    let tink = document.getElementsByTagName("audio")[8];
    
    let key = document.querySelectorAll(".key");



    if (e.keyCode == 65) {
      key[0].classList.add("playing");
      clap.play();
      setTimeout(function () {
        key[0].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 83) {
      key[1].classList.add("playing");
      hihat.play();
      setTimeout(function () {
        key[1].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 68) {
      key[2].classList.add("playing");
      kick.play();
      setTimeout(function () {
        key[2].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 70) {
      key[3].classList.add("playing");
      openhat.play();
      setTimeout(function () {
        key[3].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 71) {
      key[4].classList.add("playing");
      boom.play();
      setTimeout(function () {
        key[4].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 72) {
      key[5].classList.add("playing");
      ride.play();
      setTimeout(function () {
        key[5].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 74) {
      key[6].classList.add("playing");
      snare.play();
      setTimeout(function () {
        key[6].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 75) {
      key[7].classList.add("playing");
      tom.play();
      setTimeout(function () {
        key[7].classList.remove("playing");
      }, 50);
    } else if (e.keyCode == 76) {
      key[8].classList.add("playing");
      tink.play();
      setTimeout(function () {
        key[8].classList.remove("playing");
      }, 50);
    }
});