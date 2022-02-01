let launchesMonthsTile = {

    monthsOfYear: [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ],

    init: function() {
        let thePopup = document.getElementById('launchesMonthsPopup');
        thePopup.style.display = 'block';
    
        let popupCloseButton = document.querySelector('#launchesMonthsPopup .headerClose');
        popupCloseButton.addEventListener('click', function() {
    
            let thePopup = document.getElementById('launchesMonthsPopup');
            thePopup.style.display = 'none';
        });

        let launchesPerMonth = utils.getLaunchesPerMonthFromAllLaunches(
            launchesData.allLaunches
        );

        const ctx = document.getElementById('launchesChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: launchesMonthsTile.monthsOfYear,
                datasets: [{
                    label: '# of launches',
                    data: launchesPerMonth
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

};