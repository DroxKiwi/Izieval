/*Make scalable div by Fredj Corentin*/
function makeScalableDiv(div) {
    const element = document.querySelector(div);
    const scalers = document.querySelectorAll(div + ' .scaler')
    console.log(parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', '')))
    const col_size = 160;
    const minimum_size = 100;
    const mid_length = 80;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;

    // for loop to focus the mouse position wile it move
    for (let i = 0;i < scalers.length; i++) {
      const currentScaler = scalers[i];
      currentScaler.addEventListener('mousedown', function(e) {
        e.preventDefault()      
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_y = element.getBoundingClientRect().top;
        original_mouse_x = e.pageX;
        original_mouse_y = e.pageY;
        window.addEventListener('mousemove', scale)
        window.addEventListener('mouseup', stopScale)
      })

      function scale(e) {
        if (currentScaler.classList.contains('right')) {
          const width = original_width + (e.pageX - original_mouse_x);
          //const height = original_height + (e.pageY - original_mouse_y)
          //if (width > minimum_size) {
          //  element.style.width = width + 'px'
          //}
          if (width > (original_width+mid_length)) {
            let lvl = transformWidthToLvl(original_width);
            element.classList.add(convertToClassName(levelAfter(lvl)));
            element.classList.remove(convertToClassName(levelBefore(levelAfter(lvl))));
          }
          else if (width < (original_width-mid_length)){
            let lvl = transformWidthToLvl(original_width);
            element.classList.add(convertToClassName(levelBefore(lvl)));
            element.classList.remove(convertToClassName(levelAfter(levelBefore(lvl))));
          }
          //if (height > minimum_size) {
          //  element.style.height = height + 'px'
          //}
        }
        else if (currentScaler.classList.contains('left')) {
          //const height = original_height + (e.pageY - original_mouse_y)
          const width = original_width - (e.pageX - original_mouse_x)
          //if (height > minimum_size) {
          //  element.style.height = height + 'px'
          //}

          if (width > (original_width+mid_length)) {
            //element.style.width = width + 'px'
            let lvl = transformWidthToLvl(original_width);
            element.classList.add(convertToClassName(levelAfter(lvl)));
            element.classList.remove(convertToClassName(levelBefore(levelAfter(lvl))));
            element.style.left = original_x - col_size + 'px'
          }
          else if (width < (original_width-mid_length)){
            let lvl = transformWidthToLvl(original_width);
            element.classList.add(convertToClassName(levelBefore(lvl)));
            element.classList.remove(convertToClassName(levelAfter(levelBefore(lvl))));
            element.style.left = original_x + col_size + 'px'
          }

          //if (width > minimum_size) {
          //  //element.style.width = width + 'px'
          //  let lvl = transformWidthToLvl(original_width);
          //  element.classList.add(convertToClassName(levelBefore(lvl)));
          //  element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          //}
        }
      }
      
      function stopScale() {
        window.removeEventListener('mousemove', scale)
      }

      function transformWidthToLvl(width){
        switch (width){
          case 160:
            return 1;
          case 320:
            return 2;
          case 480:
            return 3;
          case 640:
            return 4;
          case 800:
            return 5;
          case 960:
            return 6;
          case 1120:
            return 7;
          case 1280:
            return 8;
          case 1440:
            return 9;
          case 1600:
            return 10;
          case 1760:
            return 11;
          case 1920:
            return 12;
        } 
      }
      
      function levelAfter(lvl){
        if (lvl < 12){
          return (lvl + 1);
        }
        else return lvl;
      }

      function levelBefore(lvl){
        if (lvl > 1){
          return (lvl - 1);
        }
        else return lvl;
      }

      function convertToClassName(lvl){
        return 'col-'+lvl;
      }
    }
  }
  
  makeScalableDiv('.scalable')