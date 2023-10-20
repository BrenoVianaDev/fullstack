// $('.fechado').on ('click' , function(){
//     $('.aberto').slideToogle('slow');
// });



const mostrarSub = document.querySelectorAll('.fechado')

mostrarSub.forEach(function (sub) {
  sub.addEventListener('click', function () {

    let abrirSub = this.nextElementSibling;
    if (abrirSub.style.display === 'block') {
      abrirSub.style.display = 'none'
    } else {
      abrirSub.style.display = 'block'
    }
  })
})

// $('.fechado').click(function() {
//     $('.meen ul .aberto').toggleClass('mostra');
//     })