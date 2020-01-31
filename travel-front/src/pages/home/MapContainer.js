import React, { useState } from 'react';
import {Map, GoogleApiWrapper, Polygon, Marker} from 'google-maps-react';
import Geocode from 'react-geocode';

function MapContainer({ google ,markers}) {
    const [coordinates, setCoordinates] = useState({
        lat: 0,
        lng: 0,
    });

    const style = {
        width: '100%',
        height: '100%',
    };

    Geocode.setApiKey("AIzaSyB2gOHLabctC-ixhcxQ1Vk1RmisQOeBbi0");
    Geocode.setLanguage('pl');
    Geocode.setRegion('pl');
    Geocode.enableDebug();


    return (
        <>
            <Map
                google={google}
                zoom={3}
                style={style}
                center={{
                    lat: markers && markers[0] && markers[0][1],
                    lng: markers && markers[0] && markers[0][0],
                }}
                // zoomControl={false}
                // mapTypeControl={false}
                // scaleControl={false}
                streetViewControl={false}
                panControl={false}
                rotateControl={false}
                fullscreenControl={false}
                // draggable={false}
            >
                {
                    markers && markers.map(item =>
                        <Marker
                        position={{lat: item[1], lng: item[0]}} />
                        )
                }
            </Map>
        </>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyB2gOHLabctC-ixhcxQ1Vk1RmisQOeBbi0",
})(MapContainer);
