// entire HTML is a document and every element is an object
// model is the effect of javascript in the html user interface

// Step-1: call the element in the javascript

//console.log("connected");

let heading1 = document.getElementsByTagName('h1');
// above keyword "getElementsByTagName" can be used only for multiple tag names, unles we do loop, we wil not get it.


//heading1.style.textAlign = 'center';   // not working (here heading1 is a document and style is an object)
//heading1.style.color = 'red';

for (const i of heading1) {
  //console.log(i);
}



let heading2 = document.querySelector('h2');
//console.log(heading2);
heading2.style.textAlign = 'center';
heading2.style.fontFamily = 'arial';
heading2.style.color = 'red';

let heading3 = document.querySelector('h3');
//console.log(heading3);
heading3.style.textAlign = 'center';
heading3.style.fontFamily = 'sans';
heading3.style.color = 'blue';


/* let counterClass = +document.querySelector('.counter-class').innerHTML  // it is a string, to convert we applied +
console.log(counterClass);
console.log(typeof (counterClass));
// 0 is numer now and not an object, so applied style will not work. */


let counterId = document.querySelector('#counter-id');
let incrementButton = document.querySelector('.increment');
let decrementButton = document.querySelector('#decrement');

counterId.style.fontSize = '40px';
counterId.style.padding = '20px';
counterId.style.color = 'blue';

let buttons = document.getElementsByTagName('button')

for (const button of buttons) {
  //console.log(button);
  button.style.width = '100px';
  button.style.height = '40px';
  button.style.fontSize = '35px';
  button.style.cursor = 'pointer';
}

//console.log(count);
//console.log(typeof (count));



/* const incrementNumber = () => {
  count + 1;
  console.log(count);

} */

incrementButton.addEventListener('click', () => {
  let count = +counterId.innerHTML;
  let update = count + 1;
  //console.log(update);
  counterId.innerHTML = update;
});

decrementButton.addEventListener('click', () => {
  let count = +counterId.innerHTML;

  if (count > 0) {
    let update = count - 1;
    counterId.innerHTML = update;
  }
});

let textArea = document.querySelector('textarea');
let content = document.getElementById('content');
let postButton = document.getElementById('post');


textArea.style.height = '50px';
content.style.fontSize = '17px';
textArea.style.border = '2px solid blue';

postButton.addEventListener('click', () => {
  let textValue = textArea.value;
  // console.log(textValue);
  content.innerHTML = textValue;
  textArea.value = '';
})

let screen = document.querySelector('.screen');
let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let equal = document.getElementById('equal');












