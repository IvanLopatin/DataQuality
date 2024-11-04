// Данные для круговой диаграммы
const pieData = {
    labels: ['Успешные проверки', 'Неуспешные проверки'],
    datasets: [{
        data: [56, 44],
        backgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(220, 53, 69, 0.8)'],
        borderColor: ['#28a745', '#dc3545'],
        borderWidth: 2,
        hoverOffset: 10
    }]
};

// Конфигурация круговой диаграммы
const pieConfig = {
    type: 'doughnut',
    data: pieData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#fff' }
            },
            title: {
                display: true,
                text: 'Общее состояние качества данных',
                color: '#fff',
                font: { size: 18 }
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

// Отрисовка круговой диаграммы
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieChartCtx, pieConfig);

// Данные для трендового графика в KPI
const kpiTrendData = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [{
        data: [50, 52, 54, 55, 56, 56, 56],
        fill: true,
        backgroundColor: 'rgba(54, 201, 142, 0.3)',
        borderColor: '#36c98e',
        tension: 0.3,
        pointRadius: 0
    }]
};

// Конфигурация трендового графика в KPI
const kpiTrendConfig = {
    type: 'line',
    data: kpiTrendData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { display: false },
            x: { display: false }
        },
        elements: {
            line: {
                borderCapStyle: 'round',
                borderJoinStyle: 'round'
            }
        }
    }
};

// Отрисовка трендового графика в KPI
const kpiTrendCtx = document.getElementById('kpiTrendOverall').getContext('2d');
new Chart(kpiTrendCtx, kpiTrendConfig);
