function sendMessage(){

  alert("Thank you for contacting KCT!\n\nYour message has been submitted successfully. We will get back to you soon.");

    return false;

}

window.addEventListener("scroll",function(){

    let navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>30){

        navbar.style.background="#001529";

    }

    else{

        navbar.style.background="#002147";

    }

});