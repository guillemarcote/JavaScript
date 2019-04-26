const panels = document.querySelectorAll('.pane1');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    if(e.propertyName.includes('flex-grow')){
        this.classList.toggle('open-active');
    }
 //   this.classList.toggle('open-active');
}

panels.forEach(pane1 => pane1.addEventListener('click', toggleOpen));
panels.forEach(pane1 => pane1.addEventListener('transitionend', toggleActive));
