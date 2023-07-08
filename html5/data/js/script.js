document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");

    // Habilitar opciones de respuesta de la pregunta actual y deshabilitar las demás
    function enableOptions(currentQuestion) {
        const questions = quizForm.getElementsByClassName("question");
        const currentOptions = questions[currentQuestion].querySelectorAll('input[type="radio"]');

        // Habilitar las opciones de respuesta de la pregunta actual
        for (let i = 0; i < currentOptions.length; i++) {
            currentOptions[i].disabled = false;
        }

        // Deshabilitar las opciones de respuesta de las preguntas anteriores
        for (let i = 0; i < currentQuestion; i++) {
            const prevOptions = questions[i].querySelectorAll('input[type="radio"]');
            for (let j = 0; j < prevOptions.length; j++) {
                prevOptions[j].disabled = true;
            }
        }
    }

    // Evaluar las respuestas del quiz
    function evaluateQuiz(event) {
        event.preventDefault();

        // Obtener las respuestas seleccionadas por el usuario
        var respuestas = {
            pregunta1: document.querySelector('input[name="question1"]:checked').value,
            pregunta2: document.querySelector('input[name="question2"]:checked').value,
            pregunta3: document.querySelector('input[name="question3"]:checked').value,
            pregunta4: document.querySelector('input[name="question4"]:checked').value,
            pregunta5: document.querySelector('input[name="question5"]:checked').value
        };

        // Mostrar por consola el contenido del objeto respuestas
        console.log(respuestas);

        let puntaje = 0;

        if (respuestas.pregunta1 === "option1") {
            puntaje += 10;
        }
        if (respuestas.pregunta2 === "option3") {
            puntaje += 10;
        }
        if (respuestas.pregunta3 === "option2") {
            puntaje += 10;
        }
        if (respuestas.pregunta4 === "option1") {
            puntaje += 10;
        }
        if (respuestas.pregunta5 === "option2") {
            puntaje += 10;
        }

        if (puntaje >= 30) {
            Swal.fire({
                title: '¡Congratulations!',
                text: 'Very good job. Points: ' + puntaje,
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#4CAF50'
            });
        } else {
            Swal.fire({
                title: '¡Try again!',
                text: 'You must review the contents again. Points: ' + puntaje,
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#4CAF50'
            });
        }

        console.log(puntaje);
    }

    // Asignar el evento de envío del formulario
    quizForm.addEventListener("submit", evaluateQuiz);

    // Habilitar opciones de respuesta de la primera pregunta al cargar la página
    enableOptions(0);

    // Asignar eventos de cambio para habilitar las preguntas siguientes
    const questions = quizForm.getElementsByClassName("question");
    for (let i = 0; i < questions.length - 1; i++) {
        const options = questions[i].querySelectorAll('input[type="radio"]');
        for (let j = 0; j < options.length; j++) {
            options[j].addEventListener("change", function () {
                enableOptions(i + 1);
            });
        }
    }
});

