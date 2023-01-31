import { connect } from "react-redux";
import Main from "./Main.js";

let mapStateToProps = (state) => ({
    error: state.weatherPage.error,
    weatherForecast: state.weatherPage.weatherForecast
})


const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer