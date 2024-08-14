let inpElement = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector("#list");

btn.addEventListener('click', (e) => {
    
    let textContent = inpElement.value;
    if(textContent === ''){
        alert('write quote first')
    }else{
    let li = document.createElement('li');
    let button = document.createElement('button')
    li.innerText = textContent;
    button.innerText = 'Delete'
    ul.appendChild(li);
    ul.appendChild(button)
    inpElement.value = "";
    
    button.addEventListener('click', ()=>{
        li.remove();
        button.remove();
    })
}
})

