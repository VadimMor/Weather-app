const link = "https://api.weatherapi.com/v1/forecast.json?key=ef049295fd0d41f2851183108230901";

const content = document.getElementById('content');
const search = document.getElementById('search');

let store = {
    nameCity: "City",
    dateTime: "1970-01-01 00:00",
    condition: {},
    temp: 0,
    feelslike: 0,
    humidity: 0,
    wind_kph: 0,
    isLoader: false,
    status: 200
};

const fetcData = async (props) => {
    store = {
        ...store,
        isLoader: !store.isLoader,
        status: 200
    }

    renderComponent(store);

    const result = await fetch(`${link}&q=${props}&days=7&aqi=yes&alerts=no&lang=ru`);
    const data = await result.json();

    const {
        current: { 
            temp_c: temp,
            feelslike_c: feelslike,
            humidity: humidity,
            wind_kph: wind_kph,
            condition: condition
        },
        location: { 
            name: nameCity,
            localtime: dateTime,
        }
    } = data;

    store = {
        ...store,
        nameCity,
        dateTime,
        condition,
        temp,
        feelslike,
        humidity,
        wind_kph,
        isLoader: !store.isLoader
    }

    renderComponent(store);
}

const getWeekDay = (dateTime) => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    
    return `${days[(new Date(dateTime.slice(0,4), dateTime.slice(5,7)-1, dateTime.slice(8,10))).getDay()]} ${dateTime.slice(11,16)}`
}

const renderComponent = async (props) => {
    if (props.status != 200) {
        content.innerHTML = await renderError();

    } else {
        if (props.isLoader) {
            content.innerHTML = await renderLoader();
        } else {
            content.innerHTML = await renderMetcast(props);
        }
    }
}

const renderLoader = () => {
    return `
        <div class="loader">
            <span class="loader_inner"><span></span></span>
        </div>
    `
}

const renderMetcast = (props) => {
    return `
        <div class="metcast">
            <div class="metcast_container">
                <div class="left">
                    <span class="today--icon icon-weather"></span>
                    <span class="today--temperature">${Math.round(props.temp)}°</span>
                    <div class="today--smallinfo">
                        <span class="today--feelsliketemperature">Температура по ощущениям: ${Math.round(props.feelslike)}°</span>
                        <span class="today--humidity">Влажность: ${props.humidity}%</span>
                        <span class="today--wind">Ветер: ${Math.round(props.wind_kph/3.766)}</span>
                    </div>
                </div>
                
                <div class="right">
                    <span class="namecity">${props.nameCity}</span>
                    <span class="datetime">${getWeekDay(props.dateTime)}</span>
                    <span class="condition">${props.condition.text}</span>
                </div>
            </div> 
        </div>
    `
}

search.addEventListener('submit', (e) => {
    e.preventDefault();
    searchInput = document.getElementById('search_input').value;

    fetcData(searchInput);
})