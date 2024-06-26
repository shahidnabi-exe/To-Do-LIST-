

const todolist=[ 
    {
    name:"Book Reading",
    duedate: '12-3-24'
},
  {
    name:"Playing Football",
    duedate: '12-3-24'
}];

rendertodolist();

function rendertodolist(){

    let todolistHtml ='';

    todolist.forEach((todoobject, index) => {

     // Shortcut :   const { name, duedate }= todoobject;

        const name= todoobject.name;    
        const duedate=todoobject.duedate;

        const html = `
w
        <div>    ${name} </div>
        <div> ${duedate} </div>
        <button  class="delete-button js-delete-button">
        Delete </button>
        `; 
        
        todolistHtml+=html;

    });

    document.querySelector('.js-todo-lsit')
    .innerHTML=todolistHtml;

    document.querySelectorAll( '.js-delete-button')
    .forEach( (deletebutton, index ) => {
        deletebutton.addEventListener('click', () => {
            todolist.splice(index, 1);
            rendertodolist();

        });
    });
}

document.querySelector('.js-add-button')
    .addEventListener('click', () => {
        add();
    } );



function add(){
   const inputElement= document.querySelector('.js-name-input');
    const name= inputElement.value;
    const dateinputElement=document.querySelector('.due-date');
    const duedate= dateinputElement.value;
    todolist.push({
        name: name,
        duedate: duedate
        // name,
        // duedate
    });
    inputElement.value='';

    rendertodolist();

}