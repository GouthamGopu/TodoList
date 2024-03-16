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
        /*
        for(let i = 0; i< array.length;i++){
          let valueobject = array[i];
          let {name , dueDate} =valueobject;
          let string = `
            <div>
              ${name}
            </div>
            <div>
              ${dueDate}
            </div>
            <button class="delete" onclick="
              array.splice(${i},1);
              rendertodo();">
                Delete
            </button>
              
          `
          todolist += string;
        }
        */


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

      //Reversing Array
      /*
      let j = array.length-1;
      let temp;
      for(let i = 0;i<(array.length/2);i++){
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        j--;
      }
      console.log(array);
      */

      // Finding Min Max
     /*
     let minmax = {
      min : array[0] || null ,
      max : array[0] || null 
     };//using object
     //let min = array[0] || null ;
     //let max = array[0] || null ;
     for(let i = 1; i< array.length;i++){
      if (array[i]<minmax.min){
        minmax.min = array[i];
      }
      if (array[i]>minmax.max){
        minmax.max = array[i];
      }
     }
     //console.log('Min : '+min);
     //console.log('Max : '+max);
     console.log(minmax);
     */

     //counting words in an array of vwords
     /*
     function countWords(words) {
        const result = {};

        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          if (!result[word]) {
            result[word] = 1;
          } else {
            result[word]++;
          }
        }
        return result;
      }

      console.log(countWords(['apple', 'grape', 'apple', 'apple','apple', 'grape', 'apple', 'apple']));
      */

      
      
      let array1 = [1,-100,-54,675,-876,76];

      //filter() function;
      let array3=array1.filter((value,i)=>{
        return value>=0;
        //if(value>=0) return true;
        //else return false;
      });
      console.log(array3);


      //map() function
      let array2=array1.map( value=>  value+1000);//also write in one line
      console.log(array2);
    

