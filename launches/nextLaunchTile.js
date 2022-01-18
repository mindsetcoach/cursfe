let nextLaunchTile = {

    init: function() {
        let nextLaunchPopup = document.getElementById('nextLaunchPopup');
        nextLaunchPopup.style.display = 'block';
    
        let closeButtons = document.querySelectorAll('#nextLaunchPopup .headerClose');
        let ourCloseButton = closeButtons[0];
        ourCloseButton.addEventListener('click', function() {
    
            let ourPopup = document.getElementById('nextLaunchPopup');
            ourPopup.style.display = 'none';
        });
    },

    render: function() {
        let now = moment(Date.now());
    
        let nextLaunchMoment = moment(
            launchesData.allLaunches[launchesData.nextLaunchIndex].date_unix * 1000
        );
    
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
    
        setTimeout(nextLaunchTile.render, 1000);
    }
};