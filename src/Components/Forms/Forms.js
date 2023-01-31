import React from "react";
import classes from './Forms.module.css'

class Forms extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.timer = null;
    }

    handleChange(event) {
        this.props.onChangeSearch(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=edd2c6c5a0e84d19b85194003232301&q=${this.props.formsValue}&days=7&aqi=no&alerts=no&lang=ru`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.props.onSubmitSearch(res)
                },
                (error) => {
                    this.props.onSubmitSearch(error)
                }
            )
    }

    render() {
        return (
            <div>
            <form
                onSubmit={ this.handleSubmit }
                className={ classes.form }
            >
                <input
                    type="text"
                    placeholder="Введите город"
                    onChange={ this.handleChange }
                    className={ classes.text }
                    value={ this.props.formsValue } />
                <input 
                    type="submit"
                    placeholder="Найти"
                    className={ classes.submit } />
            </form>
            </div>
        )
    }
}

export default Forms;