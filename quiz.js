document.addEventListener('DOMContentLoaded', function () {
    const preguntas = document.getElementsByClassName('question');
    let preguntaActual = 0;

    mostrarPregunta(preguntaActual);

    document.getElementById('siguienteBtn').addEventListener('click', function () {
        if (preguntaActual < preguntas.length - 1) {
            preguntaActual++;
            mostrarPregunta(preguntaActual);
        }
    });

    function mostrarPregunta(indice) {
        for (let i = 0; i < preguntas.length; i++) {
            preguntas[i].style.display = 'none';
        }
        preguntas[indice].style.display = 'block';

        if (preguntaActual === preguntas.length - 1) {
            document.getElementById('siguienteBtn').style.display = 'none';
            document.getElementById('enviarBtn').style.display = 'block';
        } else {
            document.getElementById('siguienteBtn').style.display = 'block';
            document.getElementById('enviarBtn').style.display = 'none';
        }
    }
});
