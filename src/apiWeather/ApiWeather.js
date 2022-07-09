class ApiWeather {
    _urlBase = "https://community-open-weather-map.p.rapidapi.com/climate/month?q=Moscow&units=metric";
    
    getResource = async (url,options) => {
        let res = await fetch(url,options);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getInfoWeather = async () => {    
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8b355c88e9msh991ce79d521f916p1aeb57jsn528eddbca0cf',
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
            }
        };
        
        const res =  await this.getResource(`${this._urlBase}`,options);
        return res.list.map(this._transformWeatherList);
    }

    _transformWeatherList = (list) => {
        return {
            dt: list.dt,
            humidity: list.humidity,
            pressure: list.pressure,
            wind_speed: list.wind_speed,
            temp_average : list.temp.average,
            temp_average_max : list.temp.average_max,
            temp_average_min : list.temp.average_min,
            temp_record_max : list.temp.record_max,
            temp_record_min : list.temp.record_min,
        }
    }

}


export default ApiWeather;