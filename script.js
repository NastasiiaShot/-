// script.js для клієнтського сайту

document.addEventListener('DOMContentLoaded', () => {
    loadAvailableOptions();
    document.getElementById('city').addEventListener('change', updateTimes);
});

function loadAvailableOptions() {
    const citySelect = document.getElementById('city');
    const dateSelect = document.getElementById('date');
    const timeSelect = document.getElementById('time');

    const cityDates = JSON.parse(localStorage.getItem('cityDates')) || {};
    const cityTimes = JSON.parse(localStorage.getItem('cityTimes')) || {};

    const selectedCity = citySelect.value;

    // Завантаження дат
    dateSelect.innerHTML = '<option value="">Оберіть дату</option>';
    if (selectedCity && cityDates[selectedCity]) {
        cityDates[selectedCity].forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            option.textContent = date;
            dateSelect.appendChild(option);
        });
    }

    // Завантаження часу
    timeSelect.innerHTML = '<option value="">Оберіть час</option>';
    if (selectedCity && cityTimes[selectedCity]) {
        cityTimes[selectedCity].forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }
}

function updateTimes() {
    const citySelect = document.getElementById('city');
    const timeSelect = document.getElementById('time');
    const selectedCity = citySelect.value;

    const cityTimes = JSON.parse(localStorage.getItem('cityTimes')) || {};
    const times = cityTimes[selectedCity] || [];

    // Очистити список часу
    timeSelect.innerHTML = '<option value="">Оберіть час</option>';

    times.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    // Оновити список дат
    loadAvailableOptions();
}



