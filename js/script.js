let box = document.querySelector('.box');
let speed = 5; // Adjust speed as needed
let snakePosition = [{ x: 4, y: 6 }];
let foodposition = { x: 10, y: 15 };
let lastScreenTime = 0;
let snakeVal = { x: 0, y: 0 };
let scoreTag = document.querySelector('.score');
let score = 0;

function gameStart(currentTime) {
    window.requestAnimationFrame(gameStart);
    if (currentTime - lastScreenTime < 1000 / speed) {
        return;
    }
    lastScreenTime = currentTime;

    gameEngine();
}

function gameOverFunction(snakePost) {
    if (snakePost[0].x >= 20 || snakePost[0].x < 0 || snakePost[0].y >= 20 || snakePost[0].y < 0) {
        return true;
    }
    for (let index = 1; index < snakePosition.length; index++) {
        if (snakePosition[index].x === snakePost[0].x && snakePosition[index].y === snakePost[0].y) {
            return true;
        }
    }
    return false;
}

function gameEngine() {
    if (gameOverFunction(snakePosition)) {
        alert('Game Over!');
        window.location.reload(); // Reload the page to restart the game
        return;
    }

    if (snakePosition[0].x === foodposition.x && snakePosition[0].y === foodposition.y) {
        score += 10;
        scoreTag.textContent = "Score: " + score;

        let a = 2;
        let b = 18;

        foodposition = { x: Math.floor(a + (b - a) * Math.random()), y: Math.floor(a + (b - a) * Math.random()) };

        let snakeIntezar = snakePosition[snakePosition.length - 1];
        snakePosition.push({ x: snakeIntezar.x, y: snakeIntezar.y });
    }

    for (let snakeAdd = snakePosition.length - 2; snakeAdd >= 0; snakeAdd--) {
        snakePosition[snakeAdd + 1] = { x: snakePosition[snakeAdd].x, y: snakePosition[snakeAdd].y };
    }

    snakePosition[0].x += snakeVal.x;
    snakePosition[0].y += snakeVal.y;

    box.innerHTML = "";

    snakePosition.forEach((element, index) => {
        let snake = document.createElement('div');
        snake.setAttribute('class', 'snake');
        snake.style.gridRowStart = snakePosition[index].y;
        snake.style.gridColumnStart = snakePosition[index].x;
        box.appendChild(snake);
    });

    let food = document.createElement('div');
    food.setAttribute('class', 'food');
    food.style.gridRowStart = foodposition.y;
    food.style.gridColumnStart = foodposition.x;
    box.appendChild(food);
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (snakeVal.y !== 1) { // Disallow reversing into itself
                snakeVal.x = 0;
                snakeVal.y = -1;
            }
            break;
        case "ArrowDown":
            if (snakeVal.y !== -1) {
                snakeVal.x = 0;
                snakeVal.y = 1;
            }
            break;
        case "ArrowLeft":
            if (snakeVal.x !== 1) {
                snakeVal.x = -1;
                snakeVal.y = 0;
            }
            break;
        case "ArrowRight":
            if (snakeVal.x !== -1) {
                snakeVal.x = 1;
                snakeVal.y = 0;
            }
            break;
    }
});

window.requestAnimationFrame(gameStart);




// let box = document.querySelector('.box');
// let speed = 15;

// let snakePosition = [{ x : 4 , y : 6}];
// let foodposition = { x : 10 , y : 15};

// let lastScreenTime = 0;

// let snakeVal = { x : 0 , y : 0}

// let scoreTag = document.querySelector('.score')

// let score = 0 ;

// function gameStart(currentTime){
//     window.requestAnimationFrame(gameStart);
//     if(currentTime - lastScreenTime < 1000/speed){
//         return;
//     }
//     lastScreenTime = currentTime;

//     gameEngine();
// }

// // define the gameOverFunction
// function gameOverFunction(snakePost){
//     if(snakePost[0].x >= 20 || snakePost[0].x <0 || snakePost[0].y >= 20 || snakePost[0].y < 0){
//         return true 
//     }
//     for(let index = 1; index < snakePosition.length; index++){
//         if (snakePosition[index].x === snakePost[0].x  && snakePosition[index].y === snakePost[0].y ){
//             return true
//         }
//     }
// }

// // define the game engine function
// function gameEngine(){

// if(gameOverFunction(snakePosition)){
//     alert('game over');
// }

// if(snakePosition[0].x === foodposition.x && snakePosition[0].y === foodposition.y){

//     score += 10; 

//     if(score < 10){
//         scoreTag.innerHTML= "Score" + "0" + score
//     }else{
//         scoreTag.innerHTML = "Score " + score
//     }
//     let a = 2;
//     let b = 18;

//     foodposition = {x: Math.floor(a+ (b-a)*Math.random()), y : Math.floor(a+(b-a)*Math.random())}

//     let snakeIntezar = snakePosition[snakePosition.length - 1];
//     snakePosition.push({x: snakeIntezar.x , y : snakeIntezar.y})
// }
// for( let snakeAdd = snakePosition.length -2; snakeAdd >= 0; snakeAdd--){
   
//     snakePosition[snakeAdd + 1] = { x : snakePosition[snakeAdd].x , y : snakePosition[snakeAdd].y}
// }

//     snakePosition[0].x += snakeVal.x;
//     snakePosition[0].y += snakeVal.y;
//       box.innerHTML = "";
//       snakePosition.forEach((element,index) =>{
//         // create a snake div
//         let snake = document.createElement('div');
//         snake.setAttribute('class','snake');
//         // snake.style.background ="#fff";
//         // snake.ClassList.add('snake');
//         snake.style.gridRowStart = snakePosition[0].y;
//         snake.style.gridColumnStart =snakePosition[0].x;

//         box.appendChild(snake)
//         // create a food div
//         let food = document.createElement('div');
//         food.setAttribute('class','food');
//                 // food.style.background ="red";
//         // food.ClassList.add('food');
//         food.style.gridRowStart = foodposition.y;
//         food.style.gridColumnStart =foodposition.x;
//         box.appendChild(food)
//       })
// }

// window.addEventListener('keydown',(event) =>{
//     if(event.key === "ArrowUp"){
//         snakeVal.x = 0;
//         snakeVal.y = -1;
//     }else if(event.key === "ArrowDown"){
//         snakeVal.x = 0;
//         snakeVal.y = 1;
//     }else if(event.key === "ArrowLeft"){
//         snakeVal.x = -1;
//         snakeVal.y = 0;
//     }else if(event.key === "ArrowRight"){
//         snakeVal.x = 1;
//         snakeVal.y = 0;
//     }
// })

// window.requestAnimationFrame(gameStart)
