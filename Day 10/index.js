const checkboxes = document.querySelectorAll('.inbox input[type ="checkbox"]');
//console.log(checkboxes)

let last;

function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === last){
                inBetween = !inBetween;
                
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    last = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));