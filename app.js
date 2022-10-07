// let api = 'https://shy-gold-gorilla-sock.cyclic.app/'

function postTodo() {
    let todoText = document.querySelector("#todo").value

    axios.post(`https://easy-cyan-wildebeest-tux.cyclic.app/todo`, {
        text: todoText
    })
        .then(function (response) {

            document.querySelector("#current").innerHTML =
        `         <h3 id="result"> </h3>`              
        
        
            console.log(response.data);

            document.querySelector("#result").innerHTML = response.data.message;

            // response.data.data.map(eachTodo => {
            //     document.querySelector("#result").innerHTML += eachTodo
            //     document.querySelector("#result").innerHTML += '<br>'
            // })

        })
        .catch(function (error) {
            console.log(error);
        })

}

function getAllTodos() {
    axios.get(`https://easy-cyan-wildebeest-tux.cyclic.app/todos`)
        .then(function (response) {
            console.log(response.data);

            document.querySelector("#result").innerHTML = ""

            response.data.data.map(eachTodo => {
                document.querySelector("#result").innerHTML = eachTodo.text +  document.querySelector("#result").innerHTML
                document.querySelector("#result").innerHTML = '<br>' + document.querySelector("#result").innerHTML 
            })

        })
        .catch(function (error) {
            console.log(error);
        })
}


setInterval(getAllTodos, 700);

function getDelete() {
 
            
    let code = prompt("Enter Password ")
    if (code === "123") {
        axios.delete('https://easy-cyan-wildebeest-tux.cyclic.app/del')
    .then(function (response) {
            console.log(response.data);
    
        })    
        .catch((error) => {
        console.log(error)
    })}

    // function getUpdate(){
    //     axios.get('http://localhost:3000/edit')
    //     .then(function (response) {
    //         console.log(response.data);

    //         document.querySelector("#result").innerHTML = ""

    //         response.data.data.map(eachTodo => {
    //             document.querySelector("#result").innerHTML = eachTodo.text +  document.querySelector("#result").innerHTML
    //             document.querySelector("#result").innerHTML = '<br>' + document.querySelector("#result").innerHTML 
    //         })
    //     })
    // }


    // function getOnedelete(){
    //     axios.delete('http://localhost:3000/delete')
    //     .then(function (response) {
    //     response.data.data.map(eachTodo => {
    //              document.querySelector("#result").innerHTML = eachTodo +  document.querySelector("#result").innerHTML
    //             document.querySelector("#result").innerHTML = '<br>' + document.querySelector("#result").innerHTML 
            
    //     })
    // })
    //     .catch((error) => {
    //     console.log(error)
    // })
    // }

}