'use strict' ;{

const slider = document.getElementById('slider');
const meter = document.getElementById('meter');
const result = document.getElementById('result');

slider.addEventListener('change',()=>{
        let m = (slider.value/1000).toFixed(3) 
        meter.textContent = m;
        //24時間を秒に
        let sec = (24*60*60)/42195*slider.value; //86400秒＝１日
        let hour = Math.floor(sec/3600).toString().padStart(2,0);
        let min = Math.floor(sec%3600/60).toString().padStart(2,0);
        result.textContent = `${hour}:${min}`;
});
}