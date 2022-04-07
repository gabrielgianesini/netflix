
function playVideo(){
    $('#videoPrincipal').add();
    document.querySelector(".video-container").style.display = "flex";
    document.querySelector(".video-container").style.zIndex ="999"; 
   
}

function fecharVideo(){
    document.querySelector(".video-container").style.display = "none";
    $('iframe').attr('src', $('iframe').attr('src'));
}


function exibeDescricao(){
    let div = document.getElementById("descricao")
    setTimeout(function(){div.classList.toggle(`show`) },200)
}

