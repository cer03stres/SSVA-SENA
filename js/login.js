document.addEventListener('DOMContentLoaded', function () {
  // Limpiar los campos de usuario y contraseña al cargar la página
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  document.getElementById('loginForm').reset();
});

function logout() {
  // Redirige al login cuando se hace clic en el botón de cerrar sesión
  window.location.href = 'login.html';
}


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
  
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
   
    if (username === 'administrador' && password === 'administrador') {
      window.location.href = 'admin.html'; 
    } else if (username === 'aprendiz' && password === 'aprendiz') {
      window.location.href = 'aprendices.html'; 
    } else if (username === 'instructor' && password === 'instructor') {
      window.location.href = 'instructores.html'; 
    } else if (username === 'empresa' && password === 'empresa') {
      window.location.href = 'empresas.html'; 
    } else {
      alert('Datos incorrectas'); 
    }
  });
  