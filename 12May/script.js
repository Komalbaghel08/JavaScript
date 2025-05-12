let button = document.getElementById("btn")
button.addEventListener("click",change);
    function change() {
        console.log("hello");
};
button.addEventListener("mouseenter",display);
function display (){
    let h1 = document.getElementById("demo");
    h1.innerHTML = "hello kaise ho"
}
button.removeEventListener("click",change)