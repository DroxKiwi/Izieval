// stack system for undo and redo function

var stackTab = []
var maxUndoStack = 20
var stackPointer = -1

function historyStack(stack){
    var stack = document.body.cloneNode(true)
    if (stackTab.length == maxUndoStack-1){
        for (let i = 0; i < stackTab.length-1; i++){
        stackTab[i] = stackTab[i+1] 
        }
        stackTab[maxUndoStack-1] = stack
    }
    else {
        stackPointer++
        console.log(stackPointer)
        stackTab[stackPointer] = stack
    }
    console.log(stackTab)
}

function undo(){
    if (stackTab.length > 0 && stackPointer > 0){
        stackPointer--
        console.log("undo", stackPointer)
        document.body = stackTab[stackPointer]
        document.body.addEventListener('keydown', function(event) {
            // Keybind of delete key
            if (event.code == 'Delete') {
                var tabSelectedEl = this.querySelectorAll('.selected')
                tabSelectedEl.forEach(element => {
                    element.remove()
                })
            }
            if (event.ctrlKey && event.key === 'z'){
              console.log("undo")
              undo()
            }
            if (event.ctrlKey && event.key === 'y'){
              console.log("redo")
              redo()
            }
        })
        document.body.addEventListener("contextmenu", (event) => {
            event.preventDefault()
            document.getElementById('canvasAction').click()
        })
    }
    else {
        alert("Cannot undo")
    }
}

function redo(){
    if (stackTab.length > 0 && stackPointer < maxUndoStack-1 && stackPointer < stackTab.length-1){
        stackPointer++
        console.log("redo", stackPointer)
        document.body = stackTab[stackPointer]
        document.body.addEventListener('keydown', function(event) {
            // Keybind of delete key
            if (event.code == 'Delete') {
                var tabSelectedEl = this.querySelectorAll('.selected')
                tabSelectedEl.forEach(element => {
                    element.remove()
                })
            }
            if (event.ctrlKey && event.key === 'z'){
              console.log("undo")
              undo()
            }
            if (event.ctrlKey && event.key === 'y'){
              console.log("redo")
              redo()
            }
        })
        document.body.addEventListener("contextmenu", (event) => {
            event.preventDefault()
            document.getElementById('canvasAction').click()
        })
    }
    else {
        alert("Cannot redo")
    }
}
