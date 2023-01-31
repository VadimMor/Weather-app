import { connect } from "react-redux";
import Forms from "./Forms";
import { onChangeSearch, onSubmitSearch, onToggleLoader } from "../../redux/weatherReducer.js"

let mapStateToProps = (state) => ({
    formsValue: state.weatherPage.value
})

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeSearch: (text) => {
            dispatch(onChangeSearch(text))
        },
        onSubmitSearch: (resSearch) => {
            dispatch(onSubmitSearch(resSearch))
        }
    }
}

const FormsContainer = connect(mapStateToProps, mapDispatchToProps)(Forms);

export default FormsContainer