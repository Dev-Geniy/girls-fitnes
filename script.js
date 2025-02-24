document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('ru-RU');

const workouts = {
    1: { title: "Выходной 🌿", exercises: [] },
    0: {
        title: "Ноги + Пресс",
        exercises: [
            {
                name: "Приседания",
                description: "Стоя, ноги на ширине плеч, опускайтесь вниз, сгибая колени. Спина прямая.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043166.png"  // Путь к изображению
            },
            {
                name: "Выпады",
                description: "Шагайте вперед, опускаясь до угла 90 градусов в колене, затем вернитесь в исходное положение.",
                reps: "12 повторений на каждую ногу",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043175.png"  // Путь к изображению
            },
            {
                name: "Подъемы ног",
                description: "Лягте на спину, поднимайте ноги вверх, не сгибая колени, удерживайте пару секунд.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/2833/2833311.png"  // Путь к изображению
            },
            {
                name: "Скручивания",
                description: "Лежа на спине, ноги согнуты, поднимайте верхнюю часть туловища к коленям, сжимая пресс.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/384/384159.png"  // Путь к изображению
            }
        ]
    },
    2: {
        title: "Спина + Трицепс",
        exercises: [
            {
                name: "Отжимания",
                description: "Опуститесь до угла 90 градусов в локтях, затем вернитесь в исходное положение.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043182.png"  // Путь к изображению
            },
            {
                name: "Тяга гантелей",
                description: "Сгибая корпус, тяните гантели к бедрам, удерживайте спину прямо.",
                reps: "12 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/9992/9992271.png"  // Путь к изображению
            },
            {
                name: "Французский жим",
                description: "Поднимите гантели вверх, затем медленно опустите их за голову, согнув локти.",
                reps: "12 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/9992/9992386.png"  // Путь к изображению

            },
            {
                name: "Планка",
                description: "Удерживайте тело на руках и пальцах ног, сохраняя прямую линию от головы до пят.",
                reps: "30 секунд",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043182.png"  // Путь к изображению
            }
        ]
    },
    3: {
        title: "Грудь + Бицепс + Пресс",
        exercises: [
            {
                name: "Жим",
                description: "Лежа на скамье или на полу, жмите гантели вверх, удерживая локти под углом 90 градусов.",
                reps: "12 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/9992/9992109.png"  // Путь к изображению
            },
            {
                name: "Сгибание рук",
                description: "Сгибайте локти, поднимая гантели, затем медленно опускайте.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/9992/9992344.png"  // Путь к изображению
            },
            {
                name: "Скручивания",
                description: "Лежа на спине, поднимайте верхнюю часть туловища к коленям, сжимая пресс.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/384/384159.png"  // Путь к изображению
            },
            {
                name: "Подъем корпуса",
                description: "Лежа на спине, поднимите верхнюю часть туловища, не используя руки.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/384/384159.png"  // Путь к изображению
            }
        ]
    },
    4: {
        title: "Плечи + Кардио",
        exercises: [
            {
                name: "Махи",
                description: "Поднимите гантели в стороны до уровня плеч, удерживайте спину прямо.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/5480/5480470.png"  // Путь к изображению
            },
            {
                name: "Жим гантелей",
                description: "Стоя или сидя поднимите гантели вверх от груди, затем медленно опустите их обратно, можно вместе или поочерёдно.",
                reps: "12 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/9992/9992257.png"  // Путь к изображению
            },
            {
                name: "Бег на месте",
                description: "Бегайте на месте с высоким поднятием колен.",
                reps: "1 минута",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043165.png"  // Путь к изображению
            },
            {
                name: "Берпи",
                description: "Сделайте присед, прыжок назад в планку, затем вернитесь и подпрыгните.",
                reps: "10 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043171.png"  // Путь к изображению
            }
        ]
    },
    5: {
        title: "Ягодицы + Пресс",
        exercises: [
            {
                name: "Мостик",
                description: "Лежа на спине, поднимите бедра вверх, сжимая ягодицы.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043164.png"  // Путь к изображению
            },
            {
                name: "Подъемы ног",
                description: "Лежа на спине, поднимайте ноги вверх, не сгибая колени.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/185/185591.png"  // Путь к изображению
            },
            {
                name: "Планка",
                description: "Удерживайте тело на руках и пальцах ног, сохраняя прямую линию от головы до пят.",
                reps: "30 секунд",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/3043/3043182.png"  // Путь к изображению
            },
            {
                name: "Скручивания",
                description: "Лежа на спине, поднимайте верхнюю часть туловища к коленям.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/384/384159.png"  // Путь к изображению
            }
        ]
    },
    6: {
        title: "Растяжка",
        exercises: [
            {
                name: "Наклоны",
                description: "Наклоняйтесь к ногам, пытаясь достать руками до пальцев.",
                reps: "15 секунд",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/46/46662.png"  // Путь к изображению
            },
            {
                name: "Растяжка спины",
                description: "Сидя на полу, наклоняйтесь вперед, растягивая спину.",
                reps: "15 секунд",
                sets: "3 подхода",
                image: "https://cdn-icons-png.flaticon.com/128/18573/18573191.png"  // Путь к изображению
            },
            {
                name: "Растяжка ног",
                description: "Лежа на спине, подтяните одну ногу к груди, затем поменяйте.",
                reps: "15 секунд на каждую ногу",
                sets: "3 подхода",
                image: "images/lunges.jpg"  // Путь к изображению
            },
            {
                name: "Растяжка рук",
                description: "Поднимите руку и потяните за локоть другую, чтобы растянуть руку.",
                reps: "15 секунд на каждую руку",
                sets: "3 подхода",
                image: "images/lunges.jpg"  // Путь к изображению
            }
        ]
    }
};

    const todayKey = today.getDay();
    const todayWorkout = workouts[todayKey];

    document.getElementById('workout-title').textContent = todayWorkout.title;

    // Скрыть прогресс-бар на главной странице
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('workout-screen').style.display = 'none';


    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('workout-screen').style.display = 'block';
        document.getElementById('progress-container').style.display = 'block'; // Показать прогресс-бар на экране с тренировкой
        loadWorkout(todayWorkout);
    });

    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('workout-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('progress-container').style.display = 'none'; // Скрыть прогресс-бар при возврате на главную страницу
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        localStorage.clear();
        updateCalendar();
    });

function loadWorkout(workout) {
    const container = document.querySelector('.exercises');
    container.innerHTML = "";

    if (workout.exercises.length === 0) {
        container.innerHTML = "<p>Сегодня отдых! 😊</p>";
        return;
    }

    let completedExercises = 0;
    workout.exercises.forEach((exercise, index) => {
        const card = document.createElement('div');
        card.classList.add('exercise-card');

        // Добавляем изображение, название, описание, повторения и подходы
        card.innerHTML = `
            <img src="${exercise.image}" alt="${exercise.name}" class="exercise-image" />
            <h3>${exercise.name}</h3>
            <p>${exercise.description}</p>
            <p><strong>Повторения:</strong> ${exercise.reps}</p>
            <p><strong>Подходы:</strong> ${exercise.sets}</p>
            <button class="complete-btn" data-index="${index}">Выполнено</button>
        `;
        container.appendChild(card);

        // Проверяем, было ли упражнение выполнено сегодня
        const completedExercisesToday = JSON.parse(localStorage.getItem('completedExercises')) || [];
        if (completedExercisesToday.includes(index)) {
            card.classList.add('completed');
            card.querySelector('.complete-btn').disabled = true;
        }

        card.querySelector('.complete-btn').addEventListener('click', () => {
            if (!card.classList.contains('completed')) {
                card.classList.add('completed');
                completedExercises++;
                updateProgressBar(completedExercises, workout.exercises.length);

                const completedExercisesToday = JSON.parse(localStorage.getItem('completedExercises')) || [];
                completedExercisesToday.push(index);
                localStorage.setItem('completedExercises', JSON.stringify(completedExercisesToday));

                card.querySelector('.complete-btn').disabled = true; // Делаем кнопку недоступной
            }
        });
    });
}


    function updateProgressBar(completed, total) {
        const progress = (completed / total) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        if (completed === total) {
            document.getElementById('completion-message').classList.remove('hidden');
            saveWorkoutCompletion();
        }
    }

    function saveWorkoutCompletion() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        const todayStr = today.toDateString();
        if (!completedDays.includes(todayStr)) {
            completedDays.push(todayStr);
            localStorage.setItem('completedDays', JSON.stringify(completedDays));
        }
        updateCalendar();
        updateTotalWorkouts();
    }

    function updateCalendar() {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = "";
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.textContent = i;
            if (completedDays.includes(new Date(today.getFullYear(), today.getMonth(), i).toDateString())) {
                day.classList.add('completed');
            }
            calendar.appendChild(day);
        }
    }

    function updateTotalWorkouts() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        document.getElementById('total-completed').textContent = completedDays.length;
    }

    updateCalendar();
    updateTotalWorkouts();
});
