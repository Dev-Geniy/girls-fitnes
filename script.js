const workouts = [
    {
        name: 'Тренировка для ног и ягодиц',
        exercises: [
            { name: 'Приседания с гантелями', description: 'С гантелями в руках, опускайтесь до угла 90° в коленях.', reps: '3x12', type: 'legs' },
            { name: 'Ягодичный мостик с гантелями', description: 'Сжимайте ягодицы, поднимая таз, гантели на бедрах.', reps: '3x15', type: 'glutes' },
            { name: 'Выпады с гантелями', description: 'Сделайте шаг вперед, опуская колено под углом 90°.', reps: '3x10 на каждую ногу', type: 'legs' },
            { name: 'Подъемы на носки с гантелями', description: 'Встаньте на носки с гантелями в руках, медленно опускайтесь.', reps: '3x20', type: 'legs' }
        ]
    },
    {
        name: 'Тренировка для рук и плеч',
        exercises: [
            { name: 'Жим гантелей', description: 'Поднимайте гантели вверх, разгибая локти.', reps: '3x12', type: 'arms' },
            { name: 'Сгибание рук с гантелями', description: 'Поднимайте гантели к плечам.', reps: '3x12', type: 'arms' },
            { name: 'Разведение рук в стороны', description: 'Поднимайте руки в стороны на уровень плеч.', reps: '3x15', type: 'shoulders' },
            { name: 'Французский жим', description: 'Опустите гантели за голову и поднимите обратно.', reps: '3x12', type: 'arms' }
        ]
    },
    {
        name: 'Кардио для сжигания жира',
        exercises: [
            { name: 'Берпи', description: 'Прыжок, присед и отжимание. Интенсивное упражнение для всего тела.', reps: '3x15', type: 'cardio' },
            { name: 'Скручивания на коврике', description: 'Лежа на спине, выполняйте скручивания для пресса.', reps: '3x20', type: 'core' },
            { name: 'Планка', description: 'Держите тело прямым, опираясь на локти и носки ног.', reps: '3x30 секунд', type: 'core' },
            { name: 'Скакалка', description: 'Быстро прыгайте на месте с скакалкой для кардио-нагрузки.', reps: '3x1 минута', type: 'cardio' }
        ]
    },
    {
        name: 'Тренировка для пресса',
        exercises: [
            { name: 'Скручивания на коврике', description: 'Лежа на спине, выполняйте скручивания для пресса.', reps: '3x20', type: 'core' },
            { name: 'Русский твист с гантелей', description: 'Согните колени, поворачивайте туловище, держа гантель в руках.', reps: '3x20', type: 'core' },
            { name: 'Планка с поворотом', description: 'Планка с поочередным поворотом влево и вправо.', reps: '3x15', type: 'core' },
            { name: 'Ножницы', description: 'Лежа на спине, поднимите ноги и попеременно перекрещивайте их.', reps: '3x20', type: 'core' }
        ]
    },
    {
        name: 'Тренировка для спины',
        exercises: [
            { name: 'Тяга гантелей в наклоне', description: 'Наклонитесь вперед, тяните гантели к животу.', reps: '3x12', type: 'back' },
            { name: 'Супермен', description: 'Лежа на животе, поднимайте руки и ноги вверх, имитируя полет супермена.', reps: '3x15', type: 'back' },
            { name: 'Обратные отжимания', description: 'Положите руки на коврик, ноги на полу, отжимайтесь, фокусируясь на спине.', reps: '3x12', type: 'back' },
            { name: 'Планка с подтягиванием колена', description: 'Выполняйте планку, подтягивая колено к груди.', reps: '3x15 на каждую ногу', type: 'core' }
        ]
    },
    {
        name: 'Тренировка для бедер и пресса',
        exercises: [
            { name: 'Выпады вбок с гантелями', description: 'Шаг вбок с гантелями, опускаясь до 90° в коленях.', reps: '3x12 на каждую ногу', type: 'legs' },
            { name: 'Мостик для пресса', description: 'Лежа на спине, поднимайте таз, сжимая ягодицы.', reps: '3x15', type: 'glutes' },
            { name: 'Косые скручивания', description: 'Лежа на спине, скручивайтесь, чтобы косые мышцы пресса работали.', reps: '3x20', type: 'core' },
            { name: 'Планка на локтях', description: 'Удерживайте тело прямо, опираясь на локти.', reps: '3x30 секунд', type: 'core' }
        ]
    },
    {
        name: 'Тренировка для всего тела',
        exercises: [
            { name: 'Берпи', description: 'Прыжок, присед и отжимание. Интенсивное упражнение для всего тела.', reps: '3x12', type: 'cardio' },
            { name: 'Приседания с гантелями', description: 'С гантелями в руках, опускайтесь до угла 90° в коленях.', reps: '3x12', type: 'legs' },
            { name: 'Жим гантелей', description: 'Поднимайте гантели вверх, разгибая локти.', reps: '3x12', type: 'arms' },
            { name: 'Планка', description: 'Держите тело прямым, опираясь на локти и носки ног.', reps: '3x30 секунд', type: 'core' }
        ]
    }
];

const weeklyWorkouts = [
    workouts[0], workouts[1], workouts[2], workouts[3], workouts[4], workouts[5], workouts[6]
];

// Прогресс выполнения тренировки
let completedExercises = 0;
let totalExercises = 0;
let exercises = [];

// Получаем элементы из DOM
const workoutToday = document.getElementById('workout-today');
const exerciseList = document.getElementById('exercise-list');
const progressBar = document.querySelector('.progress');
const adviceContainer = document.getElementById('advice-container');
const overlay = document.getElementById('overlay');

const adviceList = [
    "Вы выполнили все упражнения на сегодня! Пейте 2-3 литра воды в день, чтобы поддерживать оптимальный водный баланс. Регулярное употребление воды улучшает обмен веществ, способствует выведению токсинов и поддерживает здоровье кожи, что особенно важно при регулярных тренировках.",
    "Вы выполнили все упражнения на сегодня! Добавьте больше белка в рацион для роста мышц и ускоренного восстановления. Белок помогает восстанавливать мышечные волокна после нагрузок, улучшает общий тонус и способствует росту силы, особенно в сочетании с регулярными силовыми тренировками.",
    "Вы выполнили все упражнения на сегодня! Сон не менее 7-8 часов – залог хорошего восстановления и эффективных тренировок. Качественный сон способствует снижению уровня стресса, поддерживает гормональный баланс и помогает организму восстанавливаться после интенсивных занятий.",
    "Вы выполнили все упражнения на сегодня! Сделайте кардио 3-4 раза в неделю для улучшения выносливости и сжигания жира. Регулярное кардио тренировки способствуют укреплению сердечно-сосудистой системы, повышают выносливость и помогают контролировать вес, что важно для достижения рельефа.",
    "Вы выполнили все упражнения на сегодня! Ешьте овощи и фрукты, которые являются источником витаминов, минералов и антиоксидантов. Включение свежих овощей и фруктов в рацион улучшает пищеварение, поддерживает иммунитет и способствует быстрому восстановлению после тренировок.",
    "Вы выполнили все упражнения на сегодня! Включите в тренировки силовые упражнения для улучшения рельефа и формирования подтянутой фигуры. Силовые нагрузки помогают укреплять мышцы, ускоряют обмен веществ и делают тело более плотным, особенно при правильном сочетании с кардио и растяжкой.",
    "Вы выполнили все упражнения на сегодня! Следите за техникой выполнения упражнений, чтобы избежать травм и достичь максимальной эффективности. Используйте зеркало или обратную связь от тренера, чтобы убедиться в правильности движений, так как корректная техника – основа успешной тренировки.",
    "Вы выполнили все упражнения на сегодня! Разнообразьте свои тренировки, чтобы задействовать разные группы мышц и предотвратить адаптацию организма. Меняйте упражнения, схемы и интенсивность, чтобы постоянно стимулировать рост и улучшение физической формы.",
    "Вы выполнили все упражнения на сегодня! Регулярно делайте разминку перед тренировкой и заминку после неё. Разминка подготавливает мышцы и суставы к нагрузкам, а заминка помогает предотвратить мышечные спазмы и ускоряет восстановление после интенсивных занятий.",
    "Вы выполнили все упражнения на сегодня! Следите за своим питанием и режимом отдыха. Сбалансированная диета, включающая достаточное количество белков, жиров и углеводов, в сочетании с качественным сном и отдыхом, является ключом к достижению ваших фитнес-целей."
];


const today = new Date().getDay();
workoutToday.textContent = `Сегодня: ${weeklyWorkouts[today].name}`;

// Функция отображения упражнений
function showExercises() {
    exerciseList.innerHTML = "";
    exercises = shuffleArray(weeklyWorkouts[today].exercises).slice(0, 4); // Выбираем 4 случайных упражнения
    totalExercises = exercises.length;

    exercises.forEach((exercise, i) => {
        const card = document.createElement('div');
        card.classList.add('exercise-card');
        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
            <p>Подходы: ${exercise.reps}</p>
            <button class="complete-btn" onclick="completeExercise(${i}, this)">Завершить</button>
        `;
        exerciseList.appendChild(card);
    });
}

// Функция завершения упражнения
function completeExercise(i, button) {
    // Если кнопка уже неактивна, выходим
    if (button.disabled) return;
    button.disabled = true;
    button.classList.add('disabled'); // Для затемнения кнопки через CSS
    completedExercises++;
    document.querySelectorAll('.exercise-card')[i].classList.add('completed');
    updateProgress();
}

// Обновление прогресс-бара и проверка завершения всех упражнений
function updateProgress() {
    const progress = (completedExercises / totalExercises) * 100;
    progressBar.style.width = `${progress}%`;

    if (completedExercises === totalExercises) {
        // Если все упражнения выполнены, скрываем тренировку и показываем overlay с советом
        hideExercises();
        showAdvice();
    }
}

// Функция скрытия карточек тренировки
function hideExercises() {
    workoutToday.style.display = 'none';
    exerciseList.style.display = 'none';
    progressBar.parentElement.style.display = 'none';
    overlay.style.display = 'flex';
}

// Функция отображения совета в overlay
function showAdvice() {
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    adviceContainer.textContent = randomAdvice;
}

// Функция перемешивания массива
function shuffleArray(arr) {
    const shuffledArray = arr.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

showExercises();
