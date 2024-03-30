let array=[];
      let element = document.querySelector('.todo');
      let element2 = document.querySelector('.list');
      let dueDateElement =document.querySelector('.duedate-input');
      function addToArray(){
        let name = element.value ;
        let dueDate = dueDateElement.value;
        array.push(
          {
            /*name: name,
            dueDate : dueDate*/
            name ,
            dueDate
          }); //works same as above line
        element.value = '';
        rendertodo();
      }
      
      function rendertodo(){
        let todolist = '';

        //foreach method using better then for loop


        array.forEach((valueobject,i) => {
          let {name , dueDate} =valueobject;
          let string = `
            <div>
              ${name}
            </div>
            <div>
              ${dueDate}
            </div>
            <button class="delete">
                Delete
            </button> 
          `
          todolist += string; 
        });


        element2.innerHTML= todolist;

        document.querySelectorAll('.delete')
        .forEach((deletebutton,i)=>{
          deletebutton.addEventListener('click',()=>{
            array.splice(i,1);
            rendertodo();
        })
        });
      }


      function keyvalue(event){
        if(event.key === 'Enter'){
          addToArray();
        }
      }
      document.body.addEventListener('keydown',(event)=>{
        keyvalue(event)
      })
      document.querySelector('.add').addEventListener('click',()=>{
        addToArray();
      })
