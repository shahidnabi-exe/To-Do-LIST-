

const todolist=[ {
    name:"Book Reading",
    duedate: '12-3-24'
},
  {
    name:"Playing Football",
    duedate: '12-3-24'
}];

rendertodolist();

function rendertodolist(){

    let todolistHtml='';

    todolist.forEach(function(todoobject,index){

        const name= todoobject.name;    
        const duedate=todoobject.duedate;
        // const { name, duedate }= todoobject;
        const html=`
        <div>    ${name} </div>
        <div> ${duedate} </div>
        <button onclick="

        todolist.splice(${index},1);
        rendertodolist();
        " class="delete-button">
        Delete </button>
        `; 
        
        todolistHtml+=html;


    });

    document.querySelector('.js-todo-lsit')
    .innerHTML=todolistHtml;
}




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