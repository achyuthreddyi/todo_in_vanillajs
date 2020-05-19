

let add = document.getElementById('add');
let removeAll = document.getElementById('removeall');
let list = document.getElementById('list');


//remove all button

removeAll.onclick = function(){
    list.innerHTML = '';
}

//adding a new list element

add.onclick = function(){
    addlis(list);
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
}

function addlis(targetUl){
    let inputText = document.getElementById('userinput').value;
    // creating all the elements tha is required
    let li = document.createElement('li');
    let textNode = document.createTextNode(inputText + ' ');
    let removeButton = document.createElement('button');
    
    if(inputText !== ''){
        removeButton.className = 'btn btn-xs btn-danger';
        removeButton.innerHTML = ' remove me ';
        removeButton.setAttribute('onclick', 'removeMe(this)');
        
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    } else {
        alert("Please enter a todo");
    }        
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}













