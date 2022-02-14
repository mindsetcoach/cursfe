let companyInfoSection = {

    init: function() {
    },

    render: function() {

        let nameElement = document.querySelector('#companyInfoSection > h2');
        nameElement.innerHTML = homeData.companyInfo.name;

        let summaryElement = document.querySelector('#companyInfoSection > p');
        summaryElement.innerHTML = homeData.companyInfo.summary;

        let founderElement = document.querySelector('#companyInfoSection .stat-founder');
        founderElement.innerHTML = homeData.companyInfo.founder;

        let employeesElement = document.querySelector('#companyInfoSection .stat-employees');
        employeesElement.innerHTML = homeData.companyInfo.employees;

        let vehiclesElement = document.querySelector('#companyInfoSection .stat-vehicles');
        vehiclesElement.innerHTML = homeData.companyInfo.vehicles;

        let launchSitesElement = document.querySelector('#companyInfoSection .stat-launch_sites');
        launchSitesElement.innerHTML = homeData.companyInfo.launch_sites;

        let valuationElement = document.querySelector('#companyInfoSection .stat-valuation');
        valuationElement.innerHTML = '$' + homeData.companyInfo.valuation;
    }

};