// alert("hello");
let check = alert('Enter any Random Number')
let randamNum = Math.floor(Math.random()*11);
// console.log(randamNum);
let userVal = prompt("Enter any random Number between 0 and 10")



if( userVal > 10 || userVal < 0){
    alert("Invalid input. Please enter a number between 0 and 10."); 
} else if(randamNum == userVal ){
  alert("Congratulations! You guessed the right number.");
}else {
    alert("Sorry, the correct number was " + randamNum);
}
