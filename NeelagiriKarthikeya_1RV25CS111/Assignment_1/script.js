function addItem(text,quer) {
       const li = document.createElement('li');
       li.textContent = text;
       document.querySelector(quer).appendChild('li');
    }

document.getElementById('addtaskbtn').addEventListener('click',()=>{
    const task_ = (document.getElementById('addtask').value);
    //console.log(tasks)
    const card = document.createElement('li');
    const clrbtn=document.createElement('button');
    clrbtn.classList.add('clrbtn')
    card.classList.add('card');
    clrbtn.textContent='done';
    card.textContent = task_;
    document.querySelector('#tasks').appendChild(card);
    //addItem(task_,'#card');
    
});