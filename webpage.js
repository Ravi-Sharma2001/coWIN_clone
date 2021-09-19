function pin(){
    document.getElementById("text").placeholder="Enter your pin";
    var title= document.getElementById("pin");
    title.setAttribute("style", "color: #002060; padding-bottom: 5px ; border-bottom: 2px solid #002060 ");
    var title2= document.getElementById("district");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");
    var title2= document.getElementById("map");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");
}
function district(){
    document.getElementById("text").placeholder="Enter your district";
    var title= document.getElementById("district");
    title.setAttribute("style", "color: #002060;padding-bottom: 5px ;border-bottom: 2px solid #002060;");
    var title2= document.getElementById("pin");
    title2.setAttribute("style", "color: rgb(153, 151, 151);border-bottom: none;padding-bottom: 5px ;");
    var title2= document.getElementById("map");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");

}
function map(){
    document.getElementById("text").placeholder="Enter your coordinates";
    var title= document.getElementById("map");
    title.setAttribute("style", "color: #002060;padding-bottom: 5px ;border-bottom: 2px solid #002060;");
    var title2= document.getElementById("pin");
    title2.setAttribute("style", "color: rgb(153, 151, 151);padding-bottom: 5px ;border-bottom: none;");
    var title2= document.getElementById("district");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");
}