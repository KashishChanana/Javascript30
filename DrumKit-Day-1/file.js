/**
 * Created by home on 12/9/17.
 */
window.onload=function(){


    function playSound(e) {
        //console.log(e.keyCode);
        const audio = document.querySelector(`audio[key-data="${e.keyCode}"]`);
        const key = document.querySelector(`.key[key-data="${e.keyCode}"]`);

        //console.log(audio);

        //console.log(key);
        if (!audio)return;
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();

    }

    function removeTransition(e){
       if(e.propertyName!=="transform") return;
        this.classList.remove("playing");
    }



    const keys=document.querySelectorAll('.key');
    keys.forEach(key=> key.addEventListener('transitionend', removeTransition));

    window.addEventListener('keydown', playSound);
}