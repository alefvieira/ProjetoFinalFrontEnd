function verificaAutenticacao() {
  if (sessionStorage.getItem('token') == null) {
    window.location.href = '/front/signin/'
  }
}

function domReady(cb) {
  ;(function checkDomReady() {
    var state = document.readyState
    if (state == 'loaded' || state == 'complete') cb()
    else setTimeout(checkDomReady, 200)
  })()
}

domReady(function () {
  $('.loader').hide()
})

function loader() {
  $('.loader').html(`
    <div class="radar-spinner">
        <div class="circle">
            <div class="circle-inner-container">
            <div class="circle-inner"></div>
            </div>
        </div>
        
        <div class="circle">
            <div class="circle-inner-container">
            <div class="circle-inner"></div>
            </div>
        </div>
        
        <div class="circle">
            <div class="circle-inner-container">
            <div class="circle-inner"></div>
            </div>
        </div>
        
        <div class="circle">
            <div class="circle-inner-container">
            <div class="circle-inner"></div>
            </div>
        </div>
    </div>
    `)
}

// VERIFICAÇÃO DA DATA VÁLIDA
// FUNções de data da compra
const dataAtual = () => {
  var data = new Date()
  var dia = String(data.getDate()).padStart(2, '0')
  var mes = String(data.getMonth() + 1).padStart(2, '0')
  var ano = data.getFullYear()
  return `${ano}-${mes}-${dia}`
}
