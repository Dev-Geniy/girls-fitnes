document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('ru-RU');

    const workouts = {
        1: { title: "Выходной 🌿", exercises: [] },
        0: { title: "Ноги + Пресс", exercises: ["Приседания", "Выпады", "Подъемы ног", "Скручивания"] },
        2: { title: "Спина + Трицепс", exercises: ["Отжимания", "Тяга гантелей", "Французский жим", "Планка"] },
        3: { title: "Грудь + Бицепс + Пресс", exercises: ["Жим", "Сгибание рук", "Скручивания", "Подъем корпуса"] },
        4: { title: "Плечи + Кардио", exercises: ["Махи", "Жим гантелей", "Бег на месте", "Берпи"] },
        5: { title: "Ягодицы + Пресс", exercises: ["Мостик", "Подъемы ног", "Планка", "Скручивания"] },
        6: { title: "Растяжка", exercises: ["Наклоны", "Растяжка спины", "Растяжка ног", "Растяжка рук"] }
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
            card.innerHTML = `<h3>${exercise}</h3><button class="complete-btn" data-index="${index}">Выполнено</button>`;
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
