/**
 * Created by home on 14/9/17.
 */
window.onload= function(){

    const canvas= document.querySelector("#draw");
    const ctx= canvas.getContext('2d');
    ctx.width=window.innerWidth;
    ctx.height=window.innerHeight;

    ctx.lineJoin='round';
    ctx.lineCap='round';
    ctx.lineWidth=20;

    let isdrawing=false;
    let lastX=0;
    let lastY=0;
    let hue=0;

    function draw(e){
        if(!isdrawing)return;

        console.log(e);

        ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`;
        ctx.beginPath(); //begins a path
        ctx.moveTo(lastX,lastY); //moves to specified point without making a line
        ctx.lineTo(e.offsetX, e.offsetY); //adds a new point and creates a line to that point from th last specified point
        ctx.stroke(); //actually draws the path you defined
        [lastX, lastY]=[e.offsetX, e.offsetY];
hue++;
    if(hue>=360){
        hue=0;
    }
    }


    canvas.addEventListener('mousedown',function(e){

     isdrawing=true;
        [lastX, lastY]=[e.offsetX, e.offsetY];


});


    canvas.addEventListener('mousemove',draw);

    canvas.addEventListener('mouseup',()=> isdrawing=false);
    canvas.addEventListener('mouseout',()=> isdrawing=false);






}