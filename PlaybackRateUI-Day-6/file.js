/**
 * Created by home on 16/9/17.
 */
window.onload=function(){

    const speed= document.querySelector('.speed');
    const speedbar=speed.querySelector('.speed-bar');
    const video= document.querySelector('.flex');

    function handlePlayback(e){

        const y= e.pageY-this.offsetTop;
        const percent= y/this.offsetHeight;
        const min= 0.5;
        const max= 2.5;
        const height= Math.round(percent*100)+ "%";
        const playbackRate= (max-min)*percent +min;
        speedbar.style.height = height;
        speedbar.textContent = playbackRate.toFixed(2) + '×';

        video.playbackRate= playbackRate;

    }


    speed.addEventListener('mousemove',handlePlayback);

}