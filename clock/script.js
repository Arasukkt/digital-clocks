
function clock()
{
    let t=new Date();
    let hours=t.getHours();
    let minutes=t.getMinutes();
    let seconds=t.getSeconds();
    let period="AM";

    if(hours>=12)
    {
        period="PM";
        if(hours>12)
        {
            hours-=12;
        }
    }
    hours=timeformat(hours);
    minutes=timeformat(minutes);
    seconds=timeformat(seconds);

    
     hours=document.getElementById('hours').textContent=hours;
     minutes=document.getElementById('mins').textContent=minutes;
     seconds=document.querySelector('#seconds').textContent=seconds;
     period=document.querySelector('#period').textContent=period;
    

}
function timeformat(time)
{
         return time < 10 ? `0${time}` : time;
}
 setInterval(clock,1000);
clock();
