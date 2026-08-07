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
        li.textContent= lnput_data;
        list_items.appendChild(li);
        input_items.value= "";

        let rmv_btn = document.createElement('button');
        rmv_btn.textContent="Remove" ;
        li.appendChild(rmv_btn);
        rmv_btn.classList.add('remove_btn');
        rmv_btn.addEventListener('click',function remove (){
            li.remove();
        })

    }

}       

addbtn.addEventListener('click',add);