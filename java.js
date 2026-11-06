
alert("¡Bienvenidos a nuestra página web!");


document.querySelectorAll('.menu a').forEach(enlace => {

   
    enlace.addEventListener('mouseover', () => {
        enlace.style.color = 'red';
    });

   
    enlace.addEventListener('mouseout', () => {
        enlace.style.color = '';
    });

});