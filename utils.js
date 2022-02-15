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

        let launchesPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (let i = 0; i < allLaunches.length; i++) {

            let aLaunch = allLaunches[i];
            let dateUTC = aLaunch.date_utc;
            let monthPart = dateUTC.split('-')[1];

            let monthAsNumber = parseInt(monthPart);

            launchesPerMonth[monthAsNumber - 1]++;

        }

        return launchesPerMonth;
    },

    getCrewMemberPhotoByCrewMemberId: function(allCrew, crewId) {
        for (let i = 0; i < allCrew.length; i++) {
            if (allCrew[i].id === crewId) {
                return allCrew[i].image;
            }
        }
    },

    getCrewPrevCrewMember: function(allCrew, crewId) {
        for (let i = 0; i < allCrew.length; i++) {
            if (allCrew[i].id === crewId) {
                if (i === 0) {
                    return null;
                } else {
                    return allCrew[i - 1];
                }
            }
        }
    },

    getCrewNextCrewMember: function(allCrew, crewId) {
        for (let i = 0; i < allCrew.length; i++) {
            if (allCrew[i].id === crewId) {
                if (i === allCrew.length - 1) {
                    return null;
                } else {
                    return allCrew[i + 1];
                }
            }
        }
    }

};