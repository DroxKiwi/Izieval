// Used to generate id for new elements
function generateIdWithIncrementation(actualId, typeObject, doc){
    // using incrementation to generate unique id for card_div
    var parsSumEntitys = parseInt(actualId, 10) + 1;
    var id = typeObject + '-' + parsSumEntitys;
    document.getElementById(doc).innerHTML = parsSumEntitys; 
    return id;
}

// Used to generate id for new element without incrementing the last count
function generateIdWithoutIncrementation(actualId, typeObject){
    // using incrementation to generate unique id for card_div4
    var parsSumEntitys = parseInt(actualId, 10);
    var id = typeObject + '-' + parsSumEntitys;
    return id;
}

// research DOM function 

// return a table with all entity by ID 
// To work it need to be part of the system notation : entityName-INDEX or it will not work

function findAll(id){
    const errorMargin = 50;
    var errorMarginTemp = errorMargin; // this local const is here to define when we stop to search (user can create and delete entity and that make the count not linear (1, 3, 8, 9, .., n))
    var i = 1;
    var temp = id+'-'+i;
    var tab = [];
    var ok = true;
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
function findOne(id, index){
    var temp = id+'-'+index;
    if (document.getElementById(temp)){
        return document.getElementById(temp);
    }
}

// return only the index of an element from id
function getIndexFromFullId(id){
    var idSplit = id.split('-');
    return idSplit[1];
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
    let contentItems = findAll('contentItem');
    for (let i = 0; i < contentItems.length; i++){
        if (isEmpty(contentItems[i])){
            contentItems[i].style.height = emptyContentBasicHeight + 'px'
        }
        else {
            contentItems[i].style.height = 'auto';
        }
    }
}
