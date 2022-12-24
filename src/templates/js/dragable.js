/* All the funtions link to the management of drag process and entity stats */

/* Events fired on the drag target || After the start of the dragging process */
document.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("Text", event.target.id);
  dragStart(event.target);
  //resetCard(event.target.parentNode);
});

/* Events fired on the drop target || During the dragging process */
document.addEventListener("dragover", function(event) {
  event.preventDefault();
  dragInAction();
});

// Function used to manage the drag and drop process

// called when item is dropped
function drop(ev) {
  ev.preventDefault();
  //if (isDropInContainerDraggableObect(ev.target)){
  //}
  console.log("enter draggable function");
  var data = ev.dataTransfer.getData("text");
  if (ev.target.id == 'deleteEntity'){
    node = document.getElementById(data);
    if (node.parentNode) {
      nodeParent = node.parentNode;
    }
    deleteEntityById(data);
    resetCard(nodeParent);
  }
  else {
    addEntity(ev, data);
  }
  dragStop(ev.target);
}


// called when drop is finished
function dragStop(e){
  dropTargets = document.querySelectorAll('.droptarget');
  for (let i = 0; i < dropTargets.length; i++) {
    if (e.id != dropTargets[i].id) {
      resetCard(dropTargets[i]);
    }
  }
}

// called when drop is starting
function dragStart(e){
  cloningEntity(e);
  scaleContentItemAuto();
}

// Start the process for dropping zone during the dragging process
function dragInAction(){
  dropTargets = document.querySelectorAll('.droptarget');
  for (let i = 0; i < dropTargets.length; i++) {
    emptyTarget(dropTargets[i]);
    isDropTargetInAction(dropTargets[i]);
  }
}

// Clone the entity into a hidden div before moving it to the drop location
function cloningEntity(e){
  zone = document.querySelector("#cloningzone");
  zone.appendChild(e);
}

// Used to modify element while dropping process is in action
function isDropTargetInAction(dt){
  //div = document.createElement('div');
  //div.className = 'dropTargetInAction';
  //div.addEventListener('click', ondrop);
  //dt.appendChild(div);
  //parent = dt.parentNode;
  //if (parent.hasChildNodes()) {
  //var children = parent.childNodes;
  //var header;
  //for (let i = 0; i < children.length; i++) {
  //  if (children[i].className == 'card-header'){
  //    header = children[i];
  //  }
  //}
  //header.innerHTML = "Glissez l'élément dans le cadre pour le déplacer";
  headers = document.querySelectorAll('.card-header');
  for (let i = 0; i < headers.length; i++){
    headers[i].innerHTML = "Glissez l'élément dans le cadre pour le déplacer";
  }
}

// Used to verifiy if the target container is a droppable zone
function isDropInContainerDraggableObect(child){
  if (child){
    var parentContainer = child.parentNode;
    while ((parentContainer.id != "card1") && (parentContainer.tagName != "BODY")) {
        parentContainer = parentContainer.parentNode;
    }
    if (parentContainer.tagName == "BODY"){
      return false;
    }
    else return true;
  }
}

// Function used to generate card

// Used to complete the dragging process from a void container to an other
function addEntity(ev, data){
  ev.target.appendChild(document.getElementById(data));
}

// Used to delete a div by id
function deleteEntityById(data){
  document.getElementById(data).remove();
}

function deleteEntity(e){
  e.remove();
}

// Used to make void into a card if its contained item is drop elsewhere
function emptyTarget(e){
  //var e = document.getElementById(id);
  if (e){
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
  }
  else {
      console.log('ERROR');
  }
}

// Verification functions

function verifyIfUniq(id){
  var tab = findAll(id);
  console.log(tab);
  console.log(tab.length);
  if (tab.length > 1){
    return false;
  }
  else return true;
}

/*

*/