/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring puck initial location
var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck')
var speed = 40;
var gap = document.getElementById('gap')

//adding the coordinates to puck
document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';

//function to log coordinates
function logCoordinates (){
 console.log('x=' + puck_x + 'y=' + puck_y);   
}

function checkCollision(){
    //collision detection code goes here
    if (puck_x >= 250 && puck_x < 350 && puck_y < 250 && puck_y > 140){
        puck.style.backgroundColor = 'red';
        console.log('collision')
    }
        
    else{
        puck.style.backgroundColor = 'yellow';
    }
}

//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates ();
    checkCollision();
});

//move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates ();
    checkCollision();
});


//move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates ();
    checkCollision();
});

//move down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates ();
    checkCollision();
});

//transport puck from arena edges
if (puck_x < 590){
    puck_x = ;
}

if (puck_x < 20){
    
}
    
if (puck_y < 0){
    
}

if (puck_y > 400){
    
}