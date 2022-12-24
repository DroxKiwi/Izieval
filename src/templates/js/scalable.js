/*Make scalable div by Fredj Corentin*/
//function makeScalableDiv(div) {
//    const element = document.querySelector(div);
//    const scalers = document.querySelectorAll(div + ' .scaler')
//    const col_size = 160;
//    const minimum_size = 100;
//    const mid_length = 80;
//    let original_width = 0;
//    let original_height = 0;
//    let original_x = 0;
//    let original_y = 0;
//    let original_mouse_x = 0;
//    let original_mouse_y = 0;
//
//    // for loop to focus the mouse position wile it move
//    for (let i = 0;i < scalers.length; i++) {
//      const currentScaler = scalers[i];
//      currentScaler.addEventListener('mousedown', function(e) {
//        e.preventDefault()      
//        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
//        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
//        original_x = element.getBoundingClientRect().left;
//        original_y = element.getBoundingClientRect().top;
//        original_mouse_x = e.pageX;
//        original_mouse_y = e.pageY;
//        window.addEventListener('mousemove', scale)
//        window.addEventListener('mouseup', stopScale)
//      })
//
//      function scale(e) {
//        if (currentScaler.classList.contains('right')) {
//          const width = original_width + (e.pageX - original_mouse_x);
//          //const height = original_height + (e.pageY - original_mouse_y)
//          //if (width > minimum_size) {
//          //  element.style.width = width + 'px'
//          //}
//          if (width > (original_width+mid_length)) {
//            let lvl = transformWidthToLvl(original_width);
//            element.classList.add(convertToClassName(levelAfter(lvl)));
//            element.classList.remove(convertToClassName(levelBefore(levelAfter(lvl))));
//          }
//          else if (width < (original_width-mid_length)){
//            let lvl = transformWidthToLvl(original_width);
//            element.classList.add(convertToClassName(levelBefore(lvl)));
//            element.classList.remove(convertToClassName(levelAfter(levelBefore(lvl))));
//          }
//          //if (height > minimum_size) {
//          //  element.style.height = height + 'px'
//          //}
//        }
//        else if (currentScaler.classList.contains('left')) {
//          //const height = original_height + (e.pageY - original_mouse_y)
//          const width = original_width - (e.pageX - original_mouse_x)
//          //if (height > minimum_size) {
//          //  element.style.height = height + 'px'
//          //}
//
//          if (width > (original_width+mid_length)) {
//            //element.style.width = width + 'px'
//            let lvl = transformWidthToLvl(original_width);
//            element.classList.add(convertToClassName(levelAfter(lvl)));
//            element.classList.remove(convertToClassName(levelBefore(levelAfter(lvl))));
//            element.style.left = original_x - col_size + 'px'
//          }
//          else if (width < (original_width-mid_length)){
//            let lvl = transformWidthToLvl(original_width);
//            element.classList.add(convertToClassName(levelBefore(lvl)));
//            element.classList.remove(convertToClassName(levelAfter(levelBefore(lvl))));
//            element.style.left = original_x + col_size + 'px'
//          }
//
//          //if (width > minimum_size) {
//          //  //element.style.width = width + 'px'
//          //  let lvl = transformWidthToLvl(original_width);
//          //  element.classList.add(convertToClassName(levelBefore(lvl)));
//          //  element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
//          //}
//        }
//      }
//      
//      function stopScale() {
//        window.removeEventListener('mousemove', scale)
//      }
//
//      function transformWidthToLvl(width){
//        switch (width){
//          case 160:
//            return 1;
//          case 320:
//            return 2;
//          case 480:
//            return 3;
//          case 640:
//            return 4;
//          case 800:
//            return 5;
//          case 960:
//            return 6;
//          case 1120:
//            return 7;
//          case 1280:
//            return 8;
//          case 1440:
//            return 9;
//          case 1600:
//            return 10;
//          case 1760:
//            return 11;
//          case 1920:
//            return 12;
//        } 
//      }
//      
//      function levelAfter(lvl){
//        if (lvl < 12){
//          return (lvl + 1);
//        }
//        else return lvl;
//      }
//
//      function levelBefore(lvl){
//        if (lvl > 1){
//          return (lvl - 1);
//        }
//        else return lvl;
//      }
//
//      function convertToClassName(lvl){
//        return 'col-'+lvl;
//      }
//    }
//  }
//  
//  makeScalableDiv('.scalable')


// 2.0 of scaling and positioning mecanisms
// NEED load in HTML page first general.js
// align-items is for the row
// justify-content is for the col

// this function is in charge to select the proper DOM to change the behavior align and justify
function positionTableContainer(e){
  // we take option tag 
  const option = e.target;
  // we take from the option the parent who it is the selected tag
  const select = option.parentNode;
  // we take from the select tag id value the index
  let index = getIndexFromFullId(select.id);
  // we search for the tableContainer with the same index
  const tableContainer = findOne('tableContainer', index);
  const ai = 'align-items-';
  const ji = 'justify-content-';
  // if it's scale button table container align class we modifie we go here
  if (select.classList.contains('SBTCA')){
    let result = ai + option.value;
    // we make sure to empty all align class
    removeAllAlignTableContainerClass(tableContainer);
    // we add the new align class selected by user
    tableContainer.classList.add(result);
  }
  // if it's scale button table container justify class we modifie we go here
  else if (select.classList.contains('SBTCJ')){
    let result = ji + option.value;
    removeAllJustifyTableContainerClass(tableContainer);
    tableContainer.classList.add(result);
  }
}

function removeAllAlignTableContainerClass(tableContainer){
  tableContainer.classList.remove('align-items-start');
  tableContainer.classList.remove('align-items-end');
  tableContainer.classList.remove('align-items-center');
  tableContainer.classList.remove('align-items-baseline');
  tableContainer.classList.remove('align-items-stretch');
}

function removeAllJustifyTableContainerClass(tableContainer){
  tableContainer.classList.remove('justify-content-start');
  tableContainer.classList.remove('justify-content-end');
  tableContainer.classList.remove('justify-content-center');
  tableContainer.classList.remove('justify-content-between');
  tableContainer.classList.remove('justify-content-around');
}



// This function is in charge to select the proper tag to scale it
function scaleContainer(e, index){
  // function findOne is coming from general.js
  // first we extract the element from the variable 
  let eTarget = e.target;
  // function getIndexFromFullId from general.js
  // we split it to grap the index 
  let eTargetInd = getIndexFromFullId(eTarget.id)
  // we verify if its a button from the containerItem
  if (eTarget.classList.contains('SBCI')){
    var element = findOne('containerItem', eTargetInd);
  }
  // or the tableContainer 
  else if (eTarget.classList.contains('SBTC')){
    var element = findOne('tableContainer', eTargetInd);
  }
  // we assign to colClass variable the actual col-N size
  let colClass = searchActualColClass(element);
  if (colClass == '0'){
    console.log('no cols found');
  }
  // we verify if it's a more or less button clicked
  else {
    if (index == '+'){
      if (colClass == 'col-12'){
        console.log("col max can't resize more");
      }
      else {
        // we remove and replace the col-N size
        element.classList.remove(colClass);
        element.classList.add(superiorColClass(colClass));
      }
    }
    else if (index == '-'){
      if (colClass == 'col-1'){
        console.log("col min can't resize less");
      }
      else {
        element.classList.remove(colClass);
        element.classList.add(inferiorColClass(colClass));
      }
    }
  }
}

// this function return the superior index of col-N
function superiorColClass(colClass){
  let ind = parseInt(getIndexFromFullId(colClass), 10);
  ind++;
  let result = 'col-' + ind.toString();
  return result;
}

// this function return the inferior index of col-N
function inferiorColClass(colClass){
  let ind = parseInt(getIndexFromFullId(colClass), 10);
  ind--;
  let result = 'col-' + ind.toString();
  return result;
}

// this function search and return the actual index of col-N
function searchActualColClass(e){
  const colSize = 12;
  const col = 'col-';
  let found = false;
  let ind = 1;
  let actualCol = '0';
  while (found == false){
    let colTemp = col+ind.toString();
    console.log(colTemp);
    if (e.classList.contains(colTemp)){
      actualCol = colTemp;
      found = true;
    }
    ind++;
    if (ind > colSize){
      found = true;
    }
  }
  console.log(actualCol);
  return actualCol;
}