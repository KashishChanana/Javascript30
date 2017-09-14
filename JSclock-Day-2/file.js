/**
 * Created by home on 13/9/17.
 */
window.onload =function(){


    const secondHand= document.querySelector('.sec-hand');
    console.log(secondHand);
    const minsHand= document.querySelector(' .min-hand');
    const hourHand= document.querySelector('.hour-hand');
    function setDate() {
        const currentDate = new Date();

        console.log(currentDate);

        const seconds = currentDate.getSeconds();
        const secondsDegrees = (seconds / 60) * 360 + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = currentDate.getMinutes();
        const minutesDegrees = (mins / 60) * 360 + ((seconds / 60) * 6) + 90;
        minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = currentDate.getHours();
        const hoursDegrees = (hours / 12) * 360 + ((mins / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    }
    setInterval(setDate,1000);

    setDate();


}