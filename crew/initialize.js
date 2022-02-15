let crewData = {
    allCrew: null,
    selectedGalleryItemId: null
};

let onCrewResponse = function(response) {

    let allCrew = response.data;

    // we save our computed data
    crewData.allCrew = allCrew;
    
    // we start drawing the UI
    totalCrewTile.render();

};

let initialize = function() {

    let crewTileElement = document.getElementById('crewTile');
    crewTileElement.addEventListener('click', totalCrewTile.init.bind(totalCrewTile));
    
    axios.get('https://api.spacexdata.com/v4/crew').then(onCrewResponse);
};

initialize();