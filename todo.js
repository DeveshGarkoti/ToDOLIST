let todoList = [
  {item:'First', dueDate:'4/10/2023'}, {item:'second', dueDate:'4/11/2023'}, 
];
displayItems()

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let tododate = dateElement.value;
  todoList.push({item:todoItem,dueDate:tododate});
  inputElement.value = ''
  dateElement.value = ''
  displayItems();
}

function displayItems() {
   let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for (let i = todoList.length-1; i >= 0; i--) {
    
    let {item , dueDate} = todoList[i]

    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn red" onclick='todoList.splice(${i},1);
    displayItems();'>Delete</button>
    `;
    
  }

  containerElement.innerHTML = newHtml;
}
