// Used to generate id for new elements
function generateIdWithIncrementation(id){
    // using incrementation to generate unique id for card_div
    //var parsSumEntitys = parseInt(index, 10) + 1;
    var tabElement = findAllById(id)
    if (tabElement.length != 0){
        var lastElementId = tabElement[tabElement.length-1].id
    }
    else {
        var lastElementId = id + '-0'
    }
    var newIndex = parseInt(getOnlyIndex(lastElementId), 10) + 1
    var newId = id + '-' + newIndex;
    return newId;
}

// Used to generate id for new element without incrementing the last count
function generateIdWithoutIncrementation(id, index){
    // using incrementation to generate unique id for card_div4
    var parsSumEntitys = parseInt(index, 10);
    var newId = id + '-' + parsSumEntitys;
    return newId;
}

// research DOM function 

// return a table with all entity by ID 
// To work it need to be part of the system notation : entityName-INDEX or it will not work

function findAllById(id){
    const errorMargin = 50;
    var errorMarginTemp = errorMargin; // this local const is here to define when we stop to search (user can create and delete entity and that make the count not linear (1, 3, 8, 9, .., n))
    var i = 1;
    var temp = id+'-'+i;
    var tab = [];
    while ((document.getElementById(temp)) || (errorMarginTemp != 0)){
        if (document.getElementById(temp)){
            tab[i-1] = document.getElementById(temp);
            i++;
            temp = id+'-'+i;
            errorMarginTemp = errorMargin;
        }
        // i use error margin to verify if the next 50 id are used or not, if not we stop to search
        else {
            i++;
            errorMarginTemp--;
            temp = id+'-'+i;
        }
    }
    return tab;
}

// return DOM element from id and index
function findOneById(id, index){
    var temp = id+'-'+index;
    if (document.getElementById(temp)){
        return document.getElementById(temp);
    }
}

// return only the index of an element from id
function getOnlyIndex(id){
    var idSplit = id.split('-');
    return idSplit[1];
}

function getOnlyId(id){
    var idSplit = id.split('-');
    return idSplit[0];
}

// verify if a node is empty, do not have children
function isEmpty(element){
    children = element.childNodes;
    //console.log(children);
    if (children.length > 1){
        return false;
    }
    else {
        return true;
    }
}


// function in work, it is used to scale empty container
function scaleContentItemAuto(){
    const emptyContentBasicHeight = 100;
    let contentItems = findAllById('contentItem');
    for (let i = 0; i < contentItems.length; i++){
        if (isEmpty(contentItems[i])){
            contentItems[i].style.height = emptyContentBasicHeight + 'px'
        }
        else {
            contentItems[i].style.height = 'auto';
        }
    }
}
