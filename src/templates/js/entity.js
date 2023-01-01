// Main code

// v1 

// create the first card 

//var scalable = document.createElement('div');
//var scalers = document.createElement('div');
//var scalerRight = document.createElement('div');
//var scalerLeft = document.createElement('div');
//
//scalable.className = 'scalable col-1';
//scalers.className = 'scalers';
//scalerRight.className = 'scaler right';
//scalerLeft.className = 'scaler left';
//
//scalers.appendChild(scalerRight);
//scalers.appendChild(scalerLeft);
//scalable.appendChild(scalers);
//document.getElementById('containerItem-1').appendChild(scalable);

//var card_div = document.createElement('div');
//var header_card_div = document.createElement('div');
//var body_card_div = document.createElement('div');
//var footer_card_div = document.createElement('div');
//var card_h5 = document.createElement('h5');
//var card_p = document.createElement('p');
//var middle_button_card = document.createElement('button');
//
//card_div.className = 'card text-center';
//
//header_card_div.className = 'card-header';
//
//body_card_div.className = 'card-body droptarget';
//body_card_div.addEventListener('drop', drop);
//
//footer_card_div.className = 'card-footer text-muted';
//
//card_h5.className = 'card-title';
//card_h5.innerHTML = 'carte vide';
//
//card_p.className = 'card-text';
//card_p.innerHTML = 'Ajouter un composant';
//
//header_card_div.innerHTML = 'header';
//
//footer_card_div.innerHTML = 'footer';
//
//middle_button_card.type = 'button';
//middle_button_card.className = 'btn btn-primary';
//middle_button_card.innerHTML = '+';
//middle_button_card.addEventListener('click', createTextCard);
//
////scalers.appendChild(card_div);
//
//card_div.appendChild(header_card_div);
//card_div.appendChild(body_card_div);
//card_div.appendChild(footer_card_div);
//
//body_card_div.appendChild(card_h5);
//body_card_div.appendChild(card_p);
//body_card_div.appendChild(middle_button_card);
//
//var index = document.getElementById('count-card').innerHTML;
//
//card_div.id = generateIdWithoutIncrementation(index, 'card');
//body_card_div.id = generateIdWithoutIncrementation(document.getElementById('count-itemEmpty').innerHTML, 'itemEmpty');
//card_div.style.cursor = 'default';
//document.getElementById('containerItem-1').appendChild(card_div);
//scalers.appendChild(createSeparator(index));

//v2

function createSeparator(index){
    // this is a separator to create new draggable-box
    var separator = document.createElement('div');
    separator.className = 'separator';
    var btn_separator = document.createElement('button');
    btn_separator.type = 'button';
    btn_separator.className = 'btn btn-secondary';
    btn_separator.innerHTML = '+';
    btn_separator.addEventListener('click', createEmptyCard);
    separator.appendChild(btn_separator);
    separator.id = generateIdWithoutIncrementation(index, 'separator');
    return separator;
}

function deleteSeparator(index){
    deleteEntityById(index);
}

function deleteEmptyCard(e){
    emptyTarget(e.target.parentNode);
}

function deleteCardFromHeader(e){
    element = e.target.parentNode.parentNode;
    // using deleteEntity from main.js
    var id = element.id;
    // getIndexFromFullId() from general.js
    deleteEntity(document.getElementById('separator-'+getIndexFromFullId(id)));
    deleteEntity(element);
    // refresh() from behavior.js
    refresh();
}

function addSupprBtn(){
    var suppr_button_card = document.createElement('button');

    suppr_button_card.className = 'btn btn-danger';
    suppr_button_card.innerHTML = 'supprimer';
    suppr_button_card.addEventListener('click', deleteCardFromHeader);
    
}

// Used to reset the card
function resetCard(e){
    //var body_card_div = document.createElement('div');
    var card_h5 = document.createElement('h5');
    var card_p = document.createElement('p');
    var middle_button_card = document.createElement('button');
    
    //body_card_div.id = 'itemEmpty'+document.getElementById('count-itemEmpty').innerHTML;
    //body_card_div.className = 'card-body droptarget';

    card_h5.className = 'card-title';
    card_h5.innerHTML = 'carte vide';

    card_p.className = 'card-text';
    card_p.innerHTML = 'Ajouter un composant';

    middle_button_card.type = 'button';
    middle_button_card.className = 'btn btn-primary';
    middle_button_card.innerHTML = '+';
    middle_button_card.addEventListener('click', createTextCard);

    //body_card_div.appendChild(card_h5);
    //body_card_div.appendChild(card_p);
    //body_card_div.appendChild(middle_button_card);

    //e.parentNode.firstChild.innerHTML = 'header';
    //e.appendChild(body_card_div);
    e.appendChild(card_h5);
    e.appendChild(card_p);
    e.appendChild(middle_button_card);
}

function createEmptyCard() {
    var ok = true;
    if (ok === true){

        var card_div = document.createElement('div');
        var header_card_div = document.createElement('div');
        var body_card_div = document.createElement('div');
        var footer_card_div = document.createElement('div');
        var card_h5 = document.createElement('h5');
        var card_p = document.createElement('p');
        var middle_button_card = document.createElement('button');
        var suppr_button_card = document.createElement('button');

        // this is a separator to create new draggable-box
        //var separator = document.createElement('div');
        //separator.className = 'separator';
        //var btn_separator = document.createElement('button');
        //btn_separator.type = 'button';
        //btn_separator.className = 'btn btn-secondary';
        //btn_separator.innerHTML = '+';
        //btn_separator.addEventListener('click', createEmptyCard);

        card_div.className = 'card text-center';
        
        header_card_div.className = 'card-header';

        body_card_div.className = 'card-body droptarget';
        body_card_div.addEventListener('drop', drop);

        footer_card_div.className = 'card-footer text-muted';

        card_h5.className = 'card-title';
        card_h5.innerHTML = 'carte vide';

        card_p.className = 'card-text';
        card_p.innerHTML = 'Ajouter un composant';

        header_card_div.innerHTML = 'header';

        footer_card_div.innerHTML = 'footer';

        middle_button_card.type = 'button';
        middle_button_card.className = 'btn btn-primary';
        middle_button_card.innerHTML = '+';
        middle_button_card.addEventListener('click', createTextCard);

        suppr_button_card.className = 'btn btn-danger';
        suppr_button_card.innerHTML = 'supprimer';
        suppr_button_card.addEventListener('click', deleteCardFromHeader);

        header_card_div.appendChild(suppr_button_card)
        document.getElementById('containerItem')

        card_div.appendChild(header_card_div);
        card_div.appendChild(body_card_div);
        card_div.appendChild(footer_card_div);

        body_card_div.appendChild(card_h5);
        body_card_div.appendChild(card_p);
        body_card_div.appendChild(middle_button_card);

        //separator.appendChild(btn_separator);
        //document.getElementById('content-items').appendChild(separator);

        card_div.id = generateIdWithIncrementation(document.getElementById('count-card').innerHTML, 'card', 'count-card');
        body_card_div.id = generateIdWithIncrementation(document.getElementById('count-itemEmpty').innerHTML, 'itemEmpty', 'count-itemEmpty');
        // using incrementation to generate unique id for card_div
        //var sumCards = document.getElementById('count-card').innerHTML;
        //var parsSumEntitys = parseInt(sumCards, 10) + 1;
        //card_div.id='card' + parsSumEntitys;
        //document.getElementById('count-card').innerHTML = parsSumEntitys;

        // using incrementation to generate unique id for body_card_div
        //var sumItem = document.getElementById('count-itemEmpty').innerHTML;
        //var parsSumItems = parseInt(sumItem, 10) + 1;
        //body_card_div.id='itemEmpty' + parsSumItems;
        //document.getElementById('count-itemEmpty').innerHTML = parsSumItems;
        createSeparator(document.getElementById('count-card').innerHTML);
    }
}

function createTextCard(e) {
    var ok = true;
    if (ok === true){
        //var card_div = document.createElement('div');
        //var header_card_div = document.createElement('div');
        var body_card_div = document.createElement('div');
        //var footer_card_div = document.createElement('div');
        var card_h5 = document.createElement('h5');
        var card_p = document.createElement('p');
        var delete_button = document.createElement('button');
        delete_button.type = 'button';
        delete_button.className = 'btn btn-danger';
        delete_button.innerHTML = '-';
        delete_button.addEventListener('click', resetCard);

        body_card_div.draggable = true;

        // using incrementation to generate unique id for card
        body_card_div.id = generateIdWithIncrementation(document.getElementById('count-item').innerHTML, 'item', 'count-item');

        // creating the new text card
        //header_card_div.id = "testheadercard";
        //body_card_div.id = "testbodycard";
        //footer_card_div.id = "testfootercard";

        //card_div.className = 'card text-center';
        
        //header_card_div.className = 'card-header';

        body_card_div.className = 'card-body';
        body_card_div.addEventListener('click', ondrop);

        //footer_card_div.className = 'card-footer text-muted';

        card_h5.className = 'card-title';
        card_h5.innerHTML = 'nouveau paragraphe';

        card_p.className = 'card-text';
        card_p.innerHTML = 'Voici votre première carte de texte !';

        body_card_div.appendChild(delete_button);
        body_card_div.appendChild(card_h5);
        body_card_div.appendChild(card_p);

        var eTemp = e.target.parentNode;
        emptyTarget(e.target.parentNode);
        eTemp.appendChild(body_card_div);

        //card_div.appendChild(header_card_div);
        //card_div.appendChild(body_card_div);
        //card_div.appendChild(footer_card_div);
    }
}

// v3



// creation of offcanvas is here only to test implementation

function newCanvas(ind){
    var canvas = document.createElement('div')
    canvas.className = 'canvas'
    canvas.id = generateIdWithoutIncrementation(ind, 'canvas')

    var offcanvas = document.createElement('div')
    offcanvas.id = generateIdWithoutIncrementation(ind, 'offcanvas')
    offcanvas.className = 'offcanvas offcanvas-start'
    offcanvas.tabIndex = '-1'
    var target = offcanvas.id

    var offcanvasHeader = document.createElement('div')
    offcanvasHeader.className = 'offcanvas-header'
    offcanvas.appendChild(offcanvasHeader)

    var offcanvasTitle = document.createElement('h5')
    offcanvasTitle.className = 'offcanvas-title'
    offcanvasTitle.textContent = 'offcanvas test tools'
    offcanvasHeader.appendChild(offcanvasTitle)
    
    var offcanvasBody = document.createElement('div')
    offcanvasBody.className = 'offcanvas-body'
    var dropdown = document.createElement('div')
    dropdown.className = 'dropdown mt-3'
    var btn = document.createElement('button')
    btn.className = 'btn btn-secondary dropdown-toggle'
    btn.type = 'button'
    btn.dataBsToggle = 'dropdown'
    btn.value = 'Dropdown'
    var ul = document.createElement('ul')
    ul.className = 'dropdown-menu'
    var li = document.createElement('li')
    var a = document.createElement('a')
    a.className = 'dropdown-item'
    a.href = "#"
    offcanvas.appendChild(offcanvasBody)

    var canvasTools = document.createElement('div')
    canvasTools.className = 'TCT col-12'
    offcanvasBody.appendChild(canvasTools)

    var hideAction = document.createElement('div')
    hideAction.id = generateIdWithoutIncrementation(ind, 'canvasAction')
    hideAction.className = "hide"
    hideAction.dataBsToggle = "offcanvas"
    hideAction.dataBsTarget = "#" + target

    canvas.appendChild(hideAction)
    canvas.appendChild(offcanvas)

    return canvas
}


function newTableContainer(ind){
    var tableContainer = document.createElement('div')
    tableContainer.className = "tableContainer row col-3 align-items-start justify-content-start"
    tableContainer.id = generateIdWithoutIncrementation(ind, 'tableContainer')
    return tableContainer
}

function addContainer(tc, ca){
    var page = document.getElementById('page')
    var hideSection = document.getElementById('hideSection')
    page.appendChild(tc)
    hideSection.appendChild(ca)
}

function createGroupContainer(nb){
    for (let i = 0; i < nb; i++){
        let tc = newTableContainer(i+1)
        let ca = newCanvas(i+1)
        addContainer(tc, ca)
    }
}