let addbtn = document.getElementById('btn');
console.log(addbtn);
let input_items = document.getElementById('task');
console.log(input_items);
let list_items = document.getElementById('list');
console.log(list_items);

function add(){
       
      let lnput_data = input_items.value;

    if (input_items.value === ""){
        alert("Please enter items");
    }
    else{
        
        let li = document.createElement('li');
        let element= document.createElement('span');
        li.appendChild(element);
        element.innerText=lnput_data;
        list_items.appendChild(li);
        input_items.value= "";





        let rmv_btn = document.createElement('button');
        rmv_btn.textContent="Remove" ;
        li.appendChild(rmv_btn);
        rmv_btn.classList.add('remove_btn');
        rmv_btn.addEventListener('click',function remove (){
            li.remove();
        })


        
        let edit_btn = document.createElement('button');
        edit_btn.textContent="Edit";
        li.appendChild(edit_btn);
        edit_btn.classList.add('edit_btn');
        edit_btn.addEventListener('click',function edit(){
            let newValue = prompt('Edit your task:', lnput_data );
            // console.log(newValue);
            if(newValue !== null  && newValue !== ''){

                lnput_data = newValue;
                  element.innerText=lnput_data;
        
            }

            else{
                alert('please add new task')
            }
        })


        

    }

}       

addbtn.addEventListener('click',add);