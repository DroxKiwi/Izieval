// function to init the canvas in each seleciton case
function canvasInit(){
    const container = document.getElementById('page')
    container.addEventListener("contextmenu", (event) => {
        event.preventDefault()
        document.getElementById('canvasAction').click()
    })
}