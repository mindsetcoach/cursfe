let totalLaunchesTile = {

    init: function() {
        let totalLaunchesPopup = document.querySelector('#totalLaunchesPopup > .modal');
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
    
        let ourCloseButton = document.querySelector('#totalLaunchesPopup .btn-close');
        ourCloseButton.addEventListener('click', function() {
    
            let ourPopup = document.querySelector('#totalLaunchesPopup > .modal');
            ourPopup.style.display = 'none';
        });
    },

    render: function() {
        let launchesCountDiv = document.querySelector('#totalLaunchesTile .launchesCount');
        launchesCountDiv.innerHTML = launchesData.allLaunches.length;
    }
};