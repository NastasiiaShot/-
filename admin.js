// admin.js

document.addEventListener('DOMContentLoaded', () => {
    // Завантажити вже існуючі дати та час
    loadDatesAndTimes();
    
    // Обробники подій для кнопок
    document.getElementById('settingsForm').addEventListener('submit', saveSettings);
});

// Додавання дати
function addDateForCity() {
    const dateInput = document.getElementById('dateForCity');
    const citySelect = document.getElementById('citySelect');
    const dateList = document.getElementById('dateListForCity');
    
    const selectedCity = citySelect.value;
    const selectedDate = dateInput.value;
    
    if (selectedCity && selectedDate) {
        const listItem = document.createElement('li');
        listItem.textContent = selectedDate;
        dateList.appendChild(listItem);
        
        // Оновити localStorage
        let cityDates = JSON.parse(localStorage.getItem('cityDates')) || {};
        if (!cityDates[selectedCity]) {
            cityDates[selectedCity] = [];
        }
        cityDates[selectedCity].push(selectedDate);
        localStorage.setItem('cityDates', JSON.stringify(cityDates));
        
        dateInput.value = '';
    } else {
        alert('Будь ласка, виберіть місто та дату.');
    }
}

// Додавання часу
function addTimeForCity() {
    const timeInput = document.getElementById('timeForCity');
    const citySelect = document.getElementById('citySelect');
    const timeList = document.getElementById('timeListForCity');
    
    const selectedCity = citySelect.value;
    const selectedTime = timeInput.value;
    
    if (selectedCity && selectedTime) {
        const listItem = document.createElement('li');
        listItem.textContent = selectedTime;
        timeList.appendChild(listItem);
        
        // Оновити localStorage
        let cityTimes = JSON.parse(localStorage.getItem('cityTimes')) || {};
        if (!cityTimes[selectedCity]) {
            cityTimes[selectedCity] = [];
        }
        cityTimes[selectedCity].push(selectedTime);
        localStorage.setItem('cityTimes', JSON.stringify(cityTimes));
        
        timeInput.value = '';
    } else {
        alert('Будь ласка, виберіть місто та час.');
    }
}

// Зберегти налаштування
function saveSettings(event) {
    event.preventDefault();
    
    // Можна додати функціонал для збереження налаштувань тут, якщо потрібно
    alert('Налаштування збережено!');
}

// Завантажити існуючі дати та час
function loadDatesAndTimes() {
    // Функція для завантаження вже збережених дат і часу
}





