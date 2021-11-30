let crewTileElement = document.getElementById('crewTile');
let capsulesTileElement = document.getElementById('capsulesTile');
let launchesTileElement = document.getElementById('launchesTile');

let capsulesTileInit = function() {
    console.log('I am the init function for the CAPSULES tile');
};

let launchesTileInit = function() {
    console.log('I am the init function for the LAUNCHES tile');
};

crewTileElement.addEventListener('click', crewTileInit);
capsulesTileElement.addEventListener('click', capsulesTileInit);
launchesTileElement.addEventListener('click', launchesTileInit);