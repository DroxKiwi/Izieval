// function to init the canvas
function canvasInit(){
    const container = document.body
    container.addEventListener("contextmenu", (event) => {
        event.preventDefault()
        document.getElementById('canvasAction').click()
    })
}

