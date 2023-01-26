
// v4

// Entity creation

function addItem(e){
    if (e.target.id == "gridSnapItem"){
        newGridSnap()
    }
    else if (e.target.id == "textAreaItem"){
        newTextArea()
    }
}

function newTextArea(){
    var doc = document.getElementById('workspaceContent')
    var div = document.createElement('div')
    var textarea = document.createElement('textarea')
    textarea.innerHTML = "You can write now !"
    textarea.className = "textAreaInput"
    div.appendChild(textarea)
    div.id = generateIdWithIncrementation('textArea')
    div.className = "textAreaBorder draggable yes-drop element"
    div.addEventListener("dblclick", modifElement)
    div.addEventListener("click", selectElement)
    doc.appendChild(div)
    historyStack()
    document.body.click()
    historyStack()
    document.getElementById('canvasAction').click()
}

function newGridSnap(){
    var doc = document.getElementById('workspaceContent')
    var div = document.createElement('div')
    var p = document.createElement('p')
    p.innerHTML = "You can move me now !"
    div.appendChild(p)
    div.id = generateIdWithIncrementation('gridSnap')
    div.className = "gridSnap draggable yes-drop element"
    div.addEventListener("dblclick", modifElement)
    div.addEventListener("click", selectElement)
    doc.appendChild(div)
    document.body.click()
    historyStack()
    document.getElementById('canvasAction').click()
}


// selection function v1
function selectElement(e){
    var element = e.target
    if (element.classList.contains("element") || element.classList.contains("page")){
        if (e.ctrlKey && !e.altKey){
            element.classList.add("selected");
        }
        else if (e.altKey && !e.ctrlKey){
            var elTab = findAllById(getOnlyId(element.id))
            for (let i = 0; i < elTab.length; i++){
                elTab[i].classList.add("selected")
            }
        }
        else if (!e.ctrlKey && !e.altKey && !element.classList.contains("page")){
            var elTab = document.getElementsByClassName("element")
            //var elTab = findAllById(element.id)
            for (let i = 0; i < elTab.length; i++){
                elTab[i].classList.remove("selected")
            }
            element.classList.add("selected");
        }
        else if (getOnlyId(element.id) == "page") {
            var elTab = document.getElementsByClassName("element")
            for (let i = 0; i < elTab.length; i++){
                elTab[i].classList.remove("selected")
            }
        }    
    }
}

// modification function v1
function modifElement(e){
    $(e).keypress(function(e) {
        if(e.which == 13) {
            console.log("enter work")
        }
    });
    var element = e.target
    if (getOnlyId(element.id) == 'gridSnap'){
        console.log("dblclick true")
        var elModif = document.createElement('p')
        if (elModif.hasChildNodes){
            elModif.innerHTML = element.firstChild.innerHTML
        }
        element.innerHTML = ""
        var inputTemp = document.createElement('input')
        inputTemp.type = "text"
        inputTemp.size = "10"
        inputTemp.value = elModif.innerHTML
        element.appendChild(inputTemp)
    }
    else if (getOnlyId(element.parentNode.id) == 'gridSnap'){
        console.log("dblclick true")

    }
    else {
        console.log("dblclick fal   se")
    }
}