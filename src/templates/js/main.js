// step functions

// Thoses functions will be used to start a session (load code), end it (save code) and refresh it (verify code)
// In the case of the refresh function, the point is to see the condition of the code, if an element is lonely then he can't have a delete button by exemple

function start(){
  scaleContentItemAuto()
  canvasInit()
  setInterval(refresh, 1000);
}

function end(){

}

function save(){

}

function load(){

}

function initNewDocument(){

}

function refresh(){
  // mise en place d'une date dynamique 
  const d = new Date();
  document.getElementById("date").innerHTML = d.toLocaleTimeString();
}


// first call to start the document

start()