/* First Task */
var istatus = document.querySelector('h5');
var btn = document.querySelector('#add');
var flag = true;

btn.addEventListener('click',function(){
    if(flag){
        istatus.innerHTML = 'Friends';
        istatus.style.color = 'green';
        btn.textContent = 'Unfriend'
        flag = false
    }else{
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'red';
        btn.textContent = 'Add Friend'
        flag = true
    }
})

/* Second Task */

var con = document.querySelector('#container');
var love = document.querySelector('#love');

con.addEventListener('dblclick',function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity= 0.8;
    setTimeout(function(){
        love.style.opacity= 0;
    },1000);
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000);
})

/* Custom Curser */

var crsr = document.querySelector('#cursor');

window.addEventListener('mousemove',function(e){
   crsr.style.left = `${e.x}px`;
   crsr.style.top = `${e.y}px`;
})


