let crewTileInit = function() {

    let crewPopup = document.getElementById('crewPopup');
    crewPopup.style.display = 'block';

    let closeButtons = document.querySelectorAll('#crewPopup .headerClose');
    let ourCloseButton = closeButtons[0];
    ourCloseButton.addEventListener('click', function() {

        let ourPopup = document.getElementById('crewPopup');
        ourPopup.style.display = 'none';
    });

    let onCrewResponse = function(response) {
        let crewData = response.data;

        // every other subsequent code that uses the spacex data will be written here
        // :

        let nasaColElement = document.getElementById('nasaCol');
        let spacexColElement = document.getElementById('spacexCol');

        nasaColElement.innerHTML = '';
        spacexColElement.innerHTML = '';

        for (let i = 0; i < crewData.length; i = i + 1) {

            let theCosmounaut = crewData[i];

            if (theCosmounaut.agency === 'NASA') {
                nasaColElement.innerHTML = nasaColElement.innerHTML + theCosmounaut.name + '<br>';
            }

            if (theCosmounaut.agency === 'SpaceX') {
                spacexColElement.innerHTML = spacexColElement.innerHTML + theCosmounaut.name + '<br>';
            }

        }


    };
    
    axios.get('https://api.spacexdata.com/v4/crew').then(onCrewResponse);
};

let crewTileElement = document.getElementById('crewTile');
crewTileElement.addEventListener('click', crewTileInit);