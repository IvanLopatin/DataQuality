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
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            }
        }
    }
};

// Рендеринг диаграммы после загрузки страницы
window.addEventListener('load', () => {
    const ctx = document.getElementById('pieChart').getContext('2d');
    new Chart(ctx, config);
});
