function sendMessage(){

    alert("Thank you for contacting Kumaraguru College of Technology!\n\nYour message has been submitted successfully.");

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