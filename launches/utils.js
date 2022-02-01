let utils = {

    getNextLaunchIndexFromAllLaunches: function(allLaunches) {

        let nowTimestamp = Date.now();
        let nextLaunchTimestamp = nowTimestamp + (100 * 365 * 24 * 60 * 60 * 1000);
        let currentIndex = -1;
        for (let i = 0; i < allLaunches.length; i++) {
            let aLaunch = allLaunches[i];
            let aLaunchTimestamp = aLaunch.date_unix * 1000;
            if (
                nowTimestamp < aLaunchTimestamp
                &&
                nextLaunchTimestamp > aLaunchTimestamp
            ) {
                nextLaunchTimestamp = aLaunchTimestamp;
                currentIndex = i;
            }
        }
        return currentIndex;
    },

    getLaunchesPerMonthFromAllLaunches: function(allLaunches) {

        let l1 = 0;
        let l2 = 0;
        let l3 = 0;
        let l4 = 0;
        let l5 = 0;
        let l6 = 0;
        let l7 = 0;
        let l8 = 0;
        let l9 = 0;
        let l10 = 0;
        let l11 = 0;
        let l12 = 0;

        for (let i = 0; i < allLaunches.length; i++) {

            let aLaunch = allLaunches[i];
            let dateUTC = aLaunch.date_utc;
            let monthPart = dateUTC.split('-')[1];

            if (monthPart === '01') l1++;
            if (monthPart === '02') l2++;
            if (monthPart === '03') l3++;
            if (monthPart === '04') l4++;
            if (monthPart === '05') l5++;
            if (monthPart === '06') l6++;
            if (monthPart === '07') l7++;
            if (monthPart === '08') l8++;
            if (monthPart === '09') l9++;
            if (monthPart === '10') l10++;
            if (monthPart === '11') l11++;
            if (monthPart === '12') l12++;
        }

        return [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12];
    }

};