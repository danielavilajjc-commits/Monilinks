import { auth } from "./firebase-config.js"; // El archivo donde pegaste las líneas anteriores
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Seleccionamos los elementos del DOM
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const loginBtn = document.getElementById('btn-login-submit');

// Función para Iniciar Sesión
loginBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert("¡Bienvenido, " + user.email + "!");
        
        // Aquí puedes usar tu función para cambiar de pantalla
        showScreen('screen-dashboard'); 
    } catch (error) {
        console.error("Error:", error.code);
        alert("Error al ingresar: " + error.message);
    }
});