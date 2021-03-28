var panels = document.querySelectorAll(".panel")

panels.forEach( (panel) => {
    panel.addEventListener('click', () => {
        if(panel.classList !== 'active'){
            removeActiveClass()
            panel.classList.add('active')
        }
        
    })  
} )

function removeActiveClass(){
    panels.forEach( (panel) => {
        panel.classList.remove('active')
    } )

}