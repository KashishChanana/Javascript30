/**
 * Created by home on 13/9/17.
 */
window.onload=function(){

    const inputs= document.querySelectorAll('.controls input')

    function handleUpdate(){
        const suffix= this.dataset.sizing || '';
        console.log(suffix);
        console.log(this.value);
        console.log(this.name);
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    }


    inputs.forEach(input=> input.addEventListener('change',handleUpdate));
    inputs.forEach(input=> input.addEventListener('mousemove',handleUpdate));


}