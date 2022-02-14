let homeData = {
    allLaunches: null,
    nextLaunchIndex: null,
    nextLaunchCoordinates: {
        lat: null,
        lon: null
    },
    leafletMap: null,
    companyInfo: null
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

let onCompanyResponse = function(response) {
    let companyInfo = response.data;

    // we save our computed data
    homeData.companyInfo = companyInfo;
    
    // we start drawing the UI
    companyInfoSection.render();
};

let initialize = function() {

    nextLaunchMap.init();

    axios.get('https://api.spacexdata.com/v4/launches').then(onLaunchesResponse);
    axios.get('https://api.spacexdata.com/v4/company').then(onCompanyResponse);
};

initialize();