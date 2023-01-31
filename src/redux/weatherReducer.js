const ONCHANGESEARCH = "ON_CHANGE_SEARCH";
const ONSUBMITSEARCH = "ON_SUBMIT_SEARCH";
const ONTOGGLELOADER = "ON_TOGGLE_LOADER";

const initialState = {
    weatherForecast: null,
    search: '',
    value: '',
}

function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case ONCHANGESEARCH:
            return {
                ...state,
                value: action.text
            }
        case ONSUBMITSEARCH:
            if (action.weatherForecast.error) {
                return {
                    ...state,
                    weatherForecast: "error",
                    search: state.value,
                    value: ''           
                }
            } else {
                return {
                    ...state,
                    weatherForecast: {
                        location: action.weatherForecast.location,
                        condition: action.weatherForecast.current.condition,
                        tempC: action.weatherForecast.current.temp_c,
                        feelslikeC: Math.floor(action.weatherForecast.current.feelslike_c),
                        humidity: action.weatherForecast.current.humidity,
                        wind_kph: Math.floor(action.weatherForecast.current.wind_kph*0.278),
                    },
                    search: state.value,
                    value: ''
                }
            }
        default:
            return state
    }
}

export const onChangeSearch = (text) => ({
    type: ONCHANGESEARCH,
    text: text
})
export const onSubmitSearch = (weatherForecast) => ({
    type: ONSUBMITSEARCH,
    weatherForecast: weatherForecast
})
export const onToggleLoader = () => ({
    type: ONTOGGLELOADER
})
export default weatherReducer;