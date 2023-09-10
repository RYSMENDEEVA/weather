import React, {useEffect, useState} from 'react';
import axios from "axios";


const WeatherBottom = () => {

    const [fiveDays, setFiveDays] = useState([]);
     let data = []
    const getFiveDays = () => {
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=bishkek&appid=0e6cd2fb991136f1eeaf49065839a564`)
            .then(({data}) => setFiveDays(data))
            .catch((err) => console.log(err))
    };
    const FuncData = (item) => {
       fiveDays.map(item)
    }
    useEffect(() => {
        getFiveDays()
    },[]);

    return (
        <section className="weather-bottom">
            <div className="container">
                <>
                    <ul className="weather-bottom__days">
                        <li className={`weather-bottom__day`}>

                        </li>
                    </ul>
                    <div className="weather-bottom__content">
                        {
                            fiveDays?.list?.map(item => (
                                <div className="weather-bottom__card">
                                    <h3 className="weather-bottom__hour">
                                        {
                                            item.dt_txt.split('').splice(11,5).join('')
                                        }
                                    </h3>
                                    <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="" className="weather-top__deg-icon"/>
                                    <p className="weather-bottom__temp">
                                        {
                                           (item.main.temp - 273.15).toFixed()
                                        }°
                                    </p>
                                    <p className="weather-bottom__temp">
                                <span>

                                </span>
                                    </p>
                                    <p className="weather-bottom__temp">
                                <span>

                                </span>
                                    </p>
                                </div>
                            ))
                        }



                    </div>
                </>
            </div>
        </section>
    );
};

export default WeatherBottom;