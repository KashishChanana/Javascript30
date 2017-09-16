/**
 * Created by home on 15/9/17.
 */
window.onload=function(){
    //grab all elements
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');


    //functions

    function spaceBarPause(e){
        if(e.keyCode==32){
            togglePlay();
        }
        else return;
   }


     function togglePlay() {

         if(video.paused) {
             video.play();
             toggle.textContent='❚ ❚';
         }
         else{
              video.pause();
            toggle.textContent='►'

         }
     }
     function skip(){
        console.log(this);
        video.currentTime+=parseFloat(this.dataset.skip);

     }
     function volumeUpdate() {
         console.log(this.name);
         console.log(this.value);
         video[this.name]=this.value;
     }
     function showProgress(){
         const percent = (video.currentTime / video.duration) * 100;
         progressBar.style.flexBasis = `${percent}%`;
     }

     function scrub(e){

         const newposition=(e.offsetX/progress.offsetWidth)*video.duration
         video.currentTime=newposition;

     }
     //adding event listeners
    video.addEventListener('click', togglePlay);
    document.addEventListener('keydown',spaceBarPause);
    toggle.addEventListener('click',togglePlay);

    skipButtons.forEach(button =>button.addEventListener('click',skip));

    ranges.forEach(range=>range.addEventListener('change',volumeUpdate));
    video.addEventListener('timeupdate', showProgress);
    progress.addEventListener('click',scrub);
}