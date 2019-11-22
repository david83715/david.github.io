var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pic1.gif') {
        myImage.setAttribute('src','images/pic2.gif');
    } else {
        myImage.setAttribute('src','images/pic1.gif');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name:')
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mitac is too porductive! right? ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName =localStorage.getItem('name');
    myHeading.innerHTML = 'Mitac is porductive! right? ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}