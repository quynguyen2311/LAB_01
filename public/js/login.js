var formElements = document.querySelectorAll('form');
console.log(formElements);
for(let i = 0; i < formElements.length; i++){
    formElements[i].addEventListener('submit',preventD);
}
function preventD(e){
    e.preventDefault();
}
