let totalLaunchesTile = {

    init: function() {
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
    },

    render: function() {
        let launchesCountDiv = document.querySelector('#totalLaunchesTile .launchesCount');
        launchesCountDiv.innerHTML = launchesData.allLaunches.length;
    }
};