// Данные для круговой диаграммы
const data = {
    labels: ['Успешные проверки', 'Неуспешные проверки'],
    datasets: [{
        data: [56, 44],
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverOffset: 4
    }]
};

// Конфигурация диаграммы
const config = {
    type: 'pie',
    data: data,
};

// Рендеринг диаграммы
const pieChart = new Chart(
    document.getElementById('pieChart'),
    config
);
