var generate_btn = document.getElementById('generate-btn');
var page = document.getElementById('page');
var qr_name = document.getElementById('qr-name');
var qr_box = document.getElementById('qr-code-box');
var qr_image = document.getElementById('qr-image');

generate_btn.onclick = function(){

    if(qr_name.value != "")
    {
    page.style.height = "400px";
    qr_box.style.opacity = "1"
    this.value = "Generating Qr Code please wait..."
    qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qr_name.value;
    
    qr_image.onload = function(){
        generate_btn.value = "Generate Qr Code";
    }
    
    }
    else
    {
        alert("Qr name is empty!");
        alert("Please Enter The Qr Name");
    }
}

