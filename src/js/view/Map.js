const Map = (latLng) => {
    const Map = new ol.Map({ target: 'map' });
    Map.setView(
        new ol.View({
            center: ol.proj.fromLonLat([parseInt(latLng[1]), parseInt(latLng[0])]),
            zoom: 6.7
        })
    );
    const key = `AAPKd57b1ff545f5416a8589804f521ab31dd8DA4MCFRvazTH3CM8-fvw4mi7o46rw_-z3kbjLoa1AzLyeEx00kBzvwsIBh4DnC`;
    const basemapId = 'ArcGIS:ChartedTerritory';
    const basemapURL = "https://basemaps-api.arcgis.com/arcgis/rest/services/styles/" + basemapId + "?type=style&apiKey=" + key;
    olms(Map, basemapURL)
}

export default Map