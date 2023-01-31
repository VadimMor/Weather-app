import React from "react";
import classes from "./Weather.module.css"

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    }

    dayNameAndTime = (date) => {
        let nameDay = this.weekDays[(new Date(date.substr(0, 4), date.substr(5, 2), date.substr(8, 2))).getDay()];
        return `${nameDay} ${date.substr(10, 6)}`
    }

    render() {
        return (
            <>
                <div className={ classes.mainWeather }>
                    <div className={ classes.left }>
                        <div className={ classes.topContent }>
                            <img src={ this.props.weatherForecast.condition.icon }  />
                            <div>{ this.props.weatherForecast.tempC}<sup>°C</sup></div>
                        </div>
                        <div className={ classes.bottomContent }>
                            <span>Температура по ощущениям: { this.props.weatherForecast.feelslikeC }<sup>°C</sup></span>
                            <span>Влажность: { this.props.weatherForecast.humidity }%</span>
                            <span>Ветер: { this.props.weatherForecast.wind_kph } м/с</span>
                        </div>
                    </div>

                    <div className={ classes.right }>
                        <span>{ this.props.weatherForecast.location.name }, { this.props.weatherForecast.location.country }</span>
                        <span>{ this.dayNameAndTime(this.props.weatherForecast.location.localtime) }</span>
                        <span>{ this.props.weatherForecast.condition.text }</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Weather;