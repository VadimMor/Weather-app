import React from "react";
import classes from './Main.module.css';
import FormsContainer from ".././Forms/FormsContainer";
import WeatherContainer from "../Weather/WeatherContainer";

class Main extends React.Component {
    
    render() {
        return (
            <div className={ classes.main }>
                <div className={ classes.content }>
                    <FormsContainer />
                    { this.props.weatherForecast ? (
                        <div className={ classes.content__weather }>
                            { this.props.weatherForecast != "error" ? 
                                <WeatherContainer /> 
                            : <div className={ classes.error }>Ошибка! Введите название города</div> }
                        </div>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default Main;