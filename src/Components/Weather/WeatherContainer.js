import { connect } from "react-redux";
import Weather from "./Weather";

let mapStateToProps = (state) => ({
    weatherForecast: state.weatherPage.weatherForecast
})

const WeatherContainer = connect(mapStateToProps)(Weather);

export default WeatherContainer