// let allOfOurH1s = document.getElementsByTagName('h1');

// let ourSingleH1 = allOfOurH1s[0];
// console.log(ourSingleH1);

// let myDiv = document.getElementById('header');
// console.log(myDiv.children[0]);


// ourSingleH1.innerHTML += ' (updated)';

let closeButtons = document.querySelectorAll('#crewPopup .headerClose');

let ourCloseButton = closeButtons[0];

ourCloseButton.addEventListener('click', function () {

    let ourPopup = document.getElementById('crewPopup');
    ourPopup.style.display = 'none';
});

