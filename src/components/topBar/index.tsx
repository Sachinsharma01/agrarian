import React, {useEffect, useState} from 'react';

const TopBar = () => {
    const [cordinates, setCordinates] = useState({
        lat: 0,
        long: 0
    });
    useEffect( () => {
        const getLocation = async () => {
            if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser');
            } else {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCordinates({
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    })
                }, () => {
                    alert('Unable to retrieve your location');
                });
            }
        }
        const getData = async () => {
            let API = '2deacdcaa777e9ca65f5b9633d0b1b02';
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cordinates.lat}&lon=${cordinates.long}&appid=${API}&units=metric}`)
            console.log(data)
        }
        const a = getLocation();
        const d = getData()
    }, [])
    console.log(cordinates)
    return (
        <div className='topbar'>
            <strong>
                Humidity: {}
                Temperature: {}
            </strong>
        </div>
    )
}

export default TopBar;