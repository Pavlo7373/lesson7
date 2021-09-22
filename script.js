const url = 'https://jsonplaceholder.typicode.com/users/'

            

inp = document.querySelector('.inp');
btn = document.querySelector('.btn');
btn.setAttribute("disabled", true) ;
inp.oninput = function() {
    if(inp.value.length < 1){
        btn.setAttribute("disabled", true);
    } else{
        btn.removeAttribute("disabled");
        document.getElementById("p2").style.background = "blue";
        document.getElementById("p3").innerHTML = "Name";
        document.getElementById("p4").innerHTML = "Phone";
        document.getElementById("p5").innerHTML = "e-mail";
    }
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Loading… ";
    document.getElementById("p2").style.background = "red"
    document.getElementById("p2").style.color = "white"
    btn.setAttribute("disabled", true);
    
    fetch(url + inp.value)
        .then((response) => {
            return response.json();
        })
        .then((data1) => {
            console.log(data1);
            document.getElementById("p6").innerHTML = data1.name;
            document.getElementById("p7").innerHTML = data1.phone;
            document.getElementById("p8").innerHTML = data1.website;
            document.getElementById("demo").innerHTML = "Get";
            btn.removeAttribute("disabled");
            document.getElementById("p2").style.background = "blue";
        });
}