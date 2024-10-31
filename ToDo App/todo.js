
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
   // {
   //    item: 'Buy Milk',
   //    dueDate: '28/10/2024',
   // },
   // {
   //    item: 'Go to college',
   //    dueDate: '28/10/2024',
   // }
];
displayItems();

function addTodo(){
   let inputElement = document.querySelector('#todo-input');
   let dateElement = document.querySelector('#todo-date');

   // Check if input is empty
   if(inputElement.value === ''){
      alert('You must write something!');
      return; // Stop the function here if input is empty
   }

   let todoItem = inputElement.value;
   let todoDate = dateElement.value;
   todoList.push({item:todoItem,dueDate:todoDate});
   inputElement.value = '';
   dateElement.value = '';
   saveToLocalStorage();
   displayItems();
}

function displayItems(){
   let containerElement = document.querySelector('.todo-container');
   let newHtml = '';
   for(let i=0;i<todoList.length;i++){
      let item = todoList[i].item;
      let dueDate = todoList[i].dueDate;
      newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button 
               id="btn-delete"
               onclick="deleteTodo(${i})">Delete
            </button>
      `;
   }
   containerElement.innerHTML = newHtml;  
}

function deleteTodo(index){
   todoList.splice(index,1);
   saveToLocalStorage();
   displayItems();
}

function saveToLocalStorage(){
   localStorage.setItem('todoList', JSON.stringify(todoList));
}