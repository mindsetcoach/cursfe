let homeData = {
    allLaunches: null,
    nextLaunchIndex: null,
    nextLaunchCoordinates: {
        lat: null,
        lon: null
    },
    leafletMap: null
};

let onLaunchesResponse = function(response) {
    let allLaunches = response.data;
    let nextLaunchIndex = utils.getNextLaunchIndexFromAllLaunches(allLaunches);

    // we save our computed data
    homeData.allLaunches = allLaunches;
    homeData.nextLaunchIndex = nextLaunchIndex;
    
    // we start drawing the UI
    nextLaunchMap.render();
};

let initialize = function() {

    nextLaunchMap.init();

    axios.get('https://api.spacexdata.com/v4/launches').then(onLaunchesResponse);
};

initialize();