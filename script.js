// Данные для круговой диаграммы проверок качества данных (Часть 1)
const qualityChecksData = {
    labels: ['Успешные проверки', 'Неуспешные проверки'],
    datasets: [{
        data: [56, 44],
        backgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(220, 53, 69, 0.8)'],
        borderColor: ['#28a745', '#dc3545'],
        borderWidth: 2,
        hoverOffset: 10
    }]
};

// Конфигурация диаграммы проверок качества данных
const qualityChecksConfig = {
    type: 'doughnut',
    data: qualityChecksData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#fff' }
            },
            title: {
                display: true,
                text: 'Проверки Качества Данных',
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

// Данные для круговой диаграммы полноты данных (Часть 3)
const dataCompletenessData = {
    labels: ['Заполнено', 'Не заполнено'],
    datasets: [{
        data: [90, 10], // Используем показатель полноты данных (90%)
        backgroundColor: ['rgba(40, 167, 69, 0.8)', 'rgba(138, 43, 226, 0.8)'],
        borderColor: ['#28a745', '#8A2BE2'],
        borderWidth: 2,
        hoverOffset: 10
    }]
};

// Конфигурация диаграммы полноты данных
const dataCompletenessConfig = {
    type: 'doughnut',
    data: dataCompletenessData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: { color: '#fff' }
            },
            title: {
                display: true,
                text: 'Полнота Данных',
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

// Данные для трендового графика в KPI (Часть 2)
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

// Отрисовка диаграмм после загрузки страницы
window.onload = function() {
    // Часть 1: Диаграмма проверок качества данных
    const qualityChecksCtx = document.getElementById('qualityChecksChart').getContext('2d');
    new Chart(qualityChecksCtx, qualityChecksConfig);

    // Часть 3: Диаграмма полноты данных
    const dataCompletenessCtx = document.getElementById('dataCompletenessChart').getContext('2d');
    new Chart(dataCompletenessCtx, dataCompletenessConfig);

    // Часть 2: Трендовый график в KPI
    const kpiTrendCtx = document.getElementById('kpiTrendOverall').getContext('2d');
    new Chart(kpiTrendCtx, kpiTrendConfig);
};
