let homeData = {
    allLaunches: null,
    nextLaunchIndex: null,
    nextLaunchCoordinates: {
        lat: null,
        lon: null
    },
    leafletMap: null
};

let mapPinRender = function() {

    L
        .marker([
            homeData.nextLaunchCoordinates.lat,
            homeData.nextLaunchCoordinates.lon
        ])
        .bindTooltip(
            'SpaceX\'s next launch', 
            {
                permanent: true
            }
        )
        .addTo(
            homeData.leafletMap
        )
    ;
};

let onLaunchpadsResponse = function(response) {
    let theLaunchpad = response.data;

    // we save our computed data
    homeData.nextLaunchCoordinates.lat = theLaunchpad.latitude;
    homeData.nextLaunchCoordinates.lon = theLaunchpad.longitude;

    // we start drawing the UI, this time after our second axios call
    mapPinRender();
};

let mapRender = function() {

    let theLaunchpadId = homeData.allLaunches[homeData.nextLaunchIndex].launchpad;

    axios
      .get('https://api.spacexdata.com/v4/launchpads/' + theLaunchpadId)
      .then(onLaunchpadsResponse);
};

let onLaunchesResponse = function(response) {
    let allLaunches = response.data;
    let nextLaunchIndex = utils.getNextLaunchIndexFromAllLaunches(allLaunches);

    // we save our computed data
    homeData.allLaunches = allLaunches;
    homeData.nextLaunchIndex = nextLaunchIndex;
    
    // we start drawing the UI
    mapRender();
};

let initialize = function() {
    let map = L.map('homeMap').setView([45, -20], 2);
    L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
        {
            subdomains: 'abcd',
            minZoom: 2,
            maxZoom: 5,
            ext: 'png'
        }
    ).addTo(map);

    homeData.leafletMap = map;

    axios.get('https://api.spacexdata.com/v4/launches').then(onLaunchesResponse);
};

initialize();