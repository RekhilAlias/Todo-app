//DOM Loaded
document.addEventListener('DOMContentLoaded',gettodo)


//Selecting Todo Application
const todoIn = document.querySelector(".to-in");
const todoBtn = document.querySelector(".to-btn");
const todoList = document.querySelector(".todo-list");


//Adding Event Listener


todoBtn.addEventListener('click',addto);
todoList.addEventListener('click',Del);


//Add Function

function addto(e){

    //stop refreshing
  
    e.preventDefault();
//Todo li div

const todoDiv = document.createElement('div')
todoDiv.classList.add('todo')

 //create li
 
 const toLi = document.createElement('li');
 toLi.classList.add('todoItems')
 toLi.innerText = todoIn.value

//Appending 

todoDiv.appendChild(toLi);


//Storage Functon calling

todoStr(todoIn.value);



//Trash button

const trashbtn = document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerText = "- Del"
todoDiv.appendChild(trashbtn)
todoList.appendChild(todoDiv)

//clear input

todoIn.value = "";

}

//Delete Function

function Del(e){

    const item = e.target;

    if(item.classList[0] === 'trash'){
        const todo = item.parentElement;

        //Remove Function calling
        removeLocal(todo)
        todo.remove();
        
    }

}


//Add Storage 

function todoStr(todo){

    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
  todos.push(todo)
  localStorage.setItem("todos",JSON.stringify(todos));
}


//Update user interface

function gettodo(){

    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }


    todos.forEach(function(todo) {
        
        
const todoDiv = document.createElement('div')
todoDiv.classList.add('todo')

 //create li
 
 const toLi = document.createElement('li');
 toLi.classList.add('todoItems')
 toLi.innerText = todo

//Appending 

todoDiv.appendChild(toLi);






//Trash button

const trashbtn = document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerText = "- Del"
todoDiv.appendChild(trashbtn)
todoList.appendChild(todoDiv)
    });


}

//Remove todo Local storage

function removeLocal(todo){

    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

const todoIndex = todo.children[0].innerText
todos.splice(todos.indexOf(todoIndex), 1)
localStorage.setItem("todos",JSON.stringify(todos));



}