// step functions

// Thoses functions will be used to start a session (load code), end it (save code) and refresh it (verify code)
// In the case of the refresh function, the point is to see the condition of the code, if an element is lonely then he can't have a delete button by exemple

var previousBodyStat = document.body

function start(){
  canvasInit(document.body)
  setInterval(refresh, 1000);
  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
  //renderjspng()
  // Keybind
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
  //historyStack(document.body.cloneNode(true))
}

function end(){

}

function save(){
  alert("saved")
  previousBodyStat = document.body.cloneNode(true)
}

function load(){
  alert("loaded")
  document.body = previousBodyStat
  start()
}

function initNewDocument(){

}

function refresh(){
  // mise en place d'une date dynamique 
  const d = new Date()
  document.getElementById("date").innerHTML = d.toLocaleTimeString()
}

// first call to start the document

start()
