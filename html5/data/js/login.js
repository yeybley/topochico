const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === '' || password === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Enviar una solicitud al servidor para validar las credenciales
    // Aquí es donde puedes usar una biblioteca como Axios o Fetch para enviar la solicitud
});