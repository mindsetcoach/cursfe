let launchesData = {
    allLaunches: null,
    nextLaunchIndex: null
};

let onLaunchesResponse = function(response) {
    let allLaunches = response.data;
    let nextLaunchIndex = utils.getNextLaunchIndexFromAllLaunches(allLaunches);

    // we save our computed data
    launchesData.allLaunches = allLaunches;
    launchesData.nextLaunchIndex = nextLaunchIndex;
    
    // we start drawing the UI
    nextLaunchTile.render();
};

let initialize = function() {

    let nextLaunchTileElement = document.getElementById('nextLaunchTile');
    let totalLaunchesTileElement = document.getElementById('totalLaunchesTile');
    let launchesMonthsTileElement = document.getElementById('launchesMonthsTile');

    nextLaunchTileElement.addEventListener('click', nextLaunchTile.init);
    totalLaunchesTileElement.addEventListener('click', totalLaunchesTile.init);
    launchesMonthsTileElement.addEventListener('click', launchesMonthsTile.init);

    axios.get('https://api.spacexdata.com/v4/launches').then(onLaunchesResponse);
};

initialize();