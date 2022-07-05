
function verificaAutenticacao(){
    if(sessionStorage.getItem("token") == null){
        window.location.href = "/signin/";
    }
}

function domReady(cb) {
    (function checkDomReady() {
      var state = document.readyState;
      if (state == 'loaded' || state == 'complete') cb();
      else setTimeout(checkDomReady, 200);
    })();
  };
  
  domReady(function() {
    $(".loader").hide();
  });

function loader(){
    $(".loader").html(`
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
    `);
} 