let launchesData = {};

let getNextLaunchTimestampFromAllLaunches = function(allLaunches) {

    let nowTimestamp = Date.now();
    let nextLaunchTimestamp = nowTimestamp + (100 * 365 * 24 * 60 * 60 * 1000);
    for (let i = 0; i < allLaunches.length; i++) {
        let aLaunch = allLaunches[i];
        let aLaunchTimestamp = aLaunch.date_unix * 1000;
        if (
            nowTimestamp < aLaunchTimestamp
            &&
            nextLaunchTimestamp > aLaunchTimestamp
        ) {
            nextLaunchTimestamp = aLaunchTimestamp;
        }
    }
    return nextLaunchTimestamp;
};

let renderNextLaunchTile = function() {
    let now = moment(Date.now());
    let nextLaunchMoment = moment(launchesData.nextLaunchTimestamp);

    let duration = moment.duration(nextLaunchMoment.diff(now));
    //Get Days and subtract from duration
    let days = Math.floor(duration.asDays());
    duration.subtract(moment.duration(days, 'days'));
    //Get hours and subtract from duration
    let hours = duration.hours();
    duration.subtract(moment.duration(hours, 'hours'));
    //Get Minutes and subtract from duration
    let minutes = duration.minutes();
    duration.subtract(moment.duration(minutes, 'minutes'));
    //Get seconds
    let seconds = duration.seconds();

    let daysDiv = document.querySelector('#nextLaunchTile .days > span');
    let hoursDiv = document.querySelector('#nextLaunchTile .hours > span');
    let minutesDiv = document.querySelector('#nextLaunchTile .minutes > span');
    let secondsDiv = document.querySelector('#nextLaunchTile .seconds > span');

    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;

    setTimeout(renderNextLaunchTile, 1000);
}

let onLaunchesResponse = function(response) {
    let allLaunches = response.data;
    let nextLaunchTimestamp = getNextLaunchTimestampFromAllLaunches(allLaunches);

    // we save our computed data
    launchesData.allLaunches = allLaunches;
    launchesData.nextLaunchTimestamp = nextLaunchTimestamp;
    
    // we start drawing the UI
    renderNextLaunchTile();
};

let nextLaunchTileInit = function() {
    let nextLaunchPopup = document.getElementById('nextLaunchPopup');
    nextLaunchPopup.style.display = 'block';

    let closeButtons = document.querySelectorAll('#nextLaunchPopup .headerClose');
    let ourCloseButton = closeButtons[0];
    ourCloseButton.addEventListener('click', function() {

        let ourPopup = document.getElementById('nextLaunchPopup');
        ourPopup.style.display = 'none';
    });
}
let totalLaunchesTileInit = function() {
    let totalLaunchesPopup = document.getElementById('totalLaunchesPopup');
    let theTableElement = document.querySelector('#totalLaunchesPopup table');

    let data = launchesData.allLaunches;
    for (let i = 0; i < data.length; i++) {
        let row = theTableElement.insertRow();

        let no = row.insertCell();
        let name = row.insertCell();
        let date = row.insertCell();
        let ships = row.insertCell();

        no.innerHTML = data[i].flight_number;
        name.innerHTML = data[i].name;
        date.innerHTML = data[i].date_local.split('T')[0];
        ships.innerHTML = data[i].ships.length;

    }

    totalLaunchesPopup.style.display = 'block';

    let closeButtons = document.querySelectorAll('#totalLaunchesPopup .headerClose');
    let ourCloseButton = closeButtons[0];
    ourCloseButton.addEventListener('click', function() {

        let ourPopup = document.getElementById('totalLaunchesPopup');
        ourPopup.style.display = 'none';
    });
}

let initialize = function() {

    let nextLaunchTileElement = document.getElementById('nextLaunchTile');
    let totalLaunchesTileElement = document.getElementById('totalLaunchesTile');
    nextLaunchTileElement.addEventListener('click', nextLaunchTileInit);
    totalLaunchesTileElement.addEventListener('click', totalLaunchesTileInit);

    axios.get('https://api.spacexdata.com/v4/launches').then(onLaunchesResponse);
};

initialize();