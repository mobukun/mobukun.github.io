var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mental.jpg') {
        myImage.setAttribute('src', 'images/mental2.jpg');
    } else {
        myImage.setAttribute('src', 'images/mental.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Anxious, ' + myName + '?';
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Anxious, ' + storedName + '?';
}

myButton.onclick = function() {
    setUserName();
}