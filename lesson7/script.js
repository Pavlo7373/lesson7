let savedTodo = []
let userName = []
let userName6 = ["pavlo9" , "i9van"]


function sayHi() {
    let userNameMap = userName.map((el , index) => {
    return `<div id="zm"><div > ${el} </div> <div><img src="./images/remove_icon.svg"  onclick="myFunctiondel(${index})"></div></div>`
}
    )
    document.getElementById("mac2").innerHTML = userNameMap.join(' ')
}

function myFunctiondel(wew) {
    const nevArr = userName.filter(
        (el , index) => index !== wew
    )
    console.log(nevArr)
    userName = nevArr
    setTimeout(sayHi, 1000);
     localStorage.setItem("todos", JSON.stringify(userName))
}




document.getElementById("mac").innerHTML = userName.join(' ')




// const render = (name100) => {
//     const userName00 = document.getElementById("mac")
//     userName00.innerHTML = name100
//     .map()
// }

//  = userName.join('888')

const updateSavedTodo = (nextValue) => {
    savedTodo = nextValue
}

window.onload = () => {
    getMemoTodos()
     setTimeout(sayHi, 1000);
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const text11 = e.target.elements[0].value
        console.log(text11)
        updateSavedTodo([...savedTodo, text11])
        console.log(savedTodo)
    })
    
}



// const render = (todos) => {
//   const todoContainer = document.getElementById('todo-list')

//   todoContainer.innerHTML = `${todos
//     .map(
//       (el, index) => `<div id="todo">
//           <div id="todo-row">
//             <div id="todo-title"> ${index + 1}. ${
//         el.title
//       } </div>
//             <img src="./images/remove_icon.svg" onclick="removeTodo(${index})"/>
//           </div>
//           <p id="todo-description">
//               &nbsp;&nbsp;&nbsp;${el.description}  
//           </p>
//        </div>`
//     )
//     .join(' ')}
//   `
// }



const url = 'https://jsonplaceholder.typicode.com/users/'

            

inp = document.querySelector('.inp');
btn = document.querySelector('.btn');
btn.setAttribute("disabled", true) ;
inp.oninput = function() {
    if(inp.value.length < 1){
        btn.setAttribute("disabled", true);
    } else{
        btn.removeAttribute("disabled");
        document.getElementById("p2").style.background = "#8E44AD";
      
        document.getElementById("p2").style.color = "white";
        // document.getElementById("v10").font-weight = "bold";
        document.getElementById("korystyva4").style.opacity = "1";
        document.getElementById("p3").innerHTML = "Name";
        document.getElementById("p4").innerHTML = "Phone";
        document.getElementById("p5").innerHTML = "e-mail";
    }
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Loading… ";
    document.getElementById("p2").style.background = "red"
    document.getElementById("p2").style.color = "white"
    document.getElementById("p66-1").style.opacity = "0"
    btn.setAttribute("disabled", true);
    
    fetch(url + inp.value)
        .then((response) => {
            return response.json();
        })
        .then((serverResponse) => {
            // console.log(data1);
            // ocument.getElementById("korystyva4").style.opacity = "0";
            document.getElementById("p6").innerHTML = serverResponse.name;
            document.getElementById("p66").innerHTML = serverResponse.name;
            document.getElementById("p7").innerHTML = serverResponse.phone;
            document.getElementById("p8").innerHTML = serverResponse.website;
            document.getElementById("demo").innerHTML = "Get";
            btn.removeAttribute("disabled");
            document.getElementById("p2").style.background = "blue";
            document.getElementById("p88").style.opacity = "1";
        });
}


function myFunction2() {
    document.getElementById("p66-1").style.opacity = "0"
    
    fetch(url + inp.value)
        .then((response) => {
            return response.json();
        })
        .then((serverResponse) => {        
            const name100 = serverResponse.name;
            userName.push(name100)
            console.log(userName)
        //   localStorage.setItem("ttt", JSON.stringify(name100))
            localStorage.setItem("todos", JSON.stringify(userName))
        });

    
   setTimeout(sayHi, 1000);
    // let ytr = document.getElementById("p6")
    // document.getElementById("todo-list").innerHTML = ytr.name;

    // console.log(ytr)
    // console.log("rerefdehfkjegfjke")
}

// let ytr = document.getElementById("p6")
// console.log(userName)

const getMemoTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    userName = todos
    console.log(todos)
    console.log(userName)
}