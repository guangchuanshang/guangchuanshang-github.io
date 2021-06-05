let AboutMe = document.getElementById("AboutMe");
let Professional = document.getElementById("Professional");
let MainLeft = document.getElementById("mainLeft");
let MainRight = document.getElementById("mainRight");
let AboutMeUnified = document.getElementById("AboutMeUnified");
let ProfessionalUnified = document.getElementById("ProfessionalUnified");
let NavBar = document.getElementById("navbar");

let HomeButton = document.getElementById("HomeButton");
let ProfessionalButton = document.getElementById("ProfessionalButton");
let ContactButton = document.getElementById("ContactButton");
let AboutMeButton = document.getElementById("AboutMeButton");

let Border = document.getElementById("Border");
let BorderText = document.getElementById("BorderText");

let Main1 = document.getElementById("Main1");
let Main2 = document.getElementById("Main2");

/* Global variable for which page is currently active!
0: home page
1: professional page
*/
let page = 0;

/*
Shows the blurbs when hovered over.
Input: (int) 0 for left and 1 for right
*/
function showBlurb(num) {
    if (num == 0) {
        AboutMe.style.paddingTop = "27%";
        AboutMeText.style.opacity = "1";
        AboutMeUnified.style.opacity = "1";
        ProfessionalUnified.style.opacity = "0";
    }
    else {
        Professional.style.paddingTop = "27%";
        ProfessionalText.style.opacity = "1";
        AboutMeUnified.style.opacity = "0";
        ProfessionalUnified.style.opacity = "1";
    }
}

/*
Removes the blurbs when mouse leaves.
Input: (int) 0 for left and 1 for right
*/
function removeBlurb(num) {
    if (num == 0) {
        AboutMe.style.paddingTop = "35%";
        AboutMeText.style.opacity = "0";
    }
    else {
        Professional.style.paddingTop = "35%";
        ProfessionalText.style.opacity = "0";
    }
}

/*
Centers an element that's absolutely positioned to it's parent.
Input: thing (String) being centered and whole (String) the parent.
*/
function centerAbs(thing) {
    let a = document.getElementById(thing);
    a.style.right = ((NavBar.offsetWidth - a.offsetWidth) / 2) + "px";
}

function centerBorder(word) {
    BorderText.innerHTML = word;
    Border.style.right = ((NavBar.offsetWidth - Border.offsetWidth) / 2) + "px";
}

function moveToFirst(thing, whole) {
    let a = document.getElementById(thing);
    let b = document.getElementById(whole);
    let leftLength = b.offsetWidth;
    a.style.right = 0.30*leftLength + ContactButton.offsetWidth + "px";
}

function transitionToProfessional() {
    page = 1;
    
    // Nav Bar Update
    ProfessionalButton.style.transition = "right 1s";
    AboutMeButton.style.transition = "right 1s";
    centerAbs("ProfessionalButton");
    moveToFirst("AboutMeButton", "navright");
    
    // Border for nav bar
    Border.style.transitionDelay = "1s";
    centerBorder("Professional");
    centerAbs("BorderText");
    Border.style.opacity = "1";
    
    // Transitioning out of page 0!
    Main1.style.opacity = "0";
    setTimeout(function(){helper1()}, 1000);
    ProfessionalUnified.style.opacity = "0";
    AboutMeUnified.style.opacity = "0";

    // Transitioning into page 1!
    Main2.style.top = "8%";
    Main2.style.opacity = "1";
}

function helper1() {
    Main1.style.top = "100%";
}

function transitionToHome() {
    page = 0;
    
    // Nav Bar Update
    let leftLength = document.getElementById("navright").offsetWidth;
    let num = 0.30*leftLength + ContactButton.offsetWidth;
    ProfessionalButton.style.right = num + "px";
    AboutMeButton.style.right =  + 0.10*leftLength + num + ProfessionalButton.offsetWidth + "px";
    
    // Border
    Border.style.transitionDelay = "0s";
    Border.style.opacity = "0";
    
    // Transitioning out of page 1!
    Main2.style.opacity = "0";

    // Transitioning into page 0!
    setTimeout(function(){helper2()}, 1000);
}

function helper2() {
    Main2.style.top = "100%";
    Main1.style.top = "8%";
    Main1.style.opacity = "1";
    AboutMeUnified.style.opacity = "1";
}

// Initializing and start transition.
function start() {
    let leftLength = document.getElementById("navright").offsetWidth;
    let num = 0.30*leftLength + ContactButton.offsetWidth;
    ProfessionalButton.style.right = num + "px";
    AboutMeButton.style.right =  + 0.10*leftLength + num + ProfessionalButton.offsetWidth + "px";
    document.getElementById("navbar").style.top = "0%";
}

/* Page Transitioning */
ProfessionalButton.onclick = function() 
{if (page == 0) {
    transitionToProfessional()}
};

HomeButton.onclick = function() 
{if (page == 1) {
    transitionToHome()}
};

/* Home page functions. */
MainLeft.onmouseover = function()
{if (page == 0) {
    showBlurb(0)}
};

MainRight.onmouseover = function()
{if (page == 0) {
    showBlurb(1)}
};

MainLeft.onmouseout = function()
{if (page == 0) {
    removeBlurb(0)}
};

MainRight.onmouseout = function()
{if (page == 0) {
    removeBlurb(1)}
};

/* LOADING ANIMATION */
window.onload = function() {start()};