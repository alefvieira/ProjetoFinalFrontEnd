function teste(){
    alert("deu certo")
}

function verificaAutenticacao(){
    if(sessionStorage.getItem == null){
        window.location.href = "/projeto/PROJETO_FINAL/PROJETO_FINAL/login.html";
    }
}
function scripts(){
    const jcript = [
        "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
        "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
        "https://code.jquery.com/jquery-3.6.0.min.js",
    ]
    return jcript;

}