let initialize = function() {
    let map = L.map('homeMap').setView([0, 0], 2);
    L.tileLayer(
        'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
        {
            subdomains: 'abcd',
            minZoom: 2,
            maxZoom: 5,
            ext: 'png'
        }
    ).addTo(map);
};

initialize();