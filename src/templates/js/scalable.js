/*Make scalable div by Fredj Corentin*/
function makeScalableDiv(div) {
    const element = document.querySelector(div);
    const scalers = document.querySelectorAll(div + ' .scaler')
    const minimum_size = 100;
    let original_width = 0;
    let original_height = 0;
    let original_x = 0;
    let original_y = 0;
    let original_mouse_x = 0;
    let original_mouse_y = 0;
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
        if (currentScaler.classList.contains('bottom-right')) {
          const width = original_width + (e.pageX - original_mouse_x);
          const height = original_height + (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
        }
        else if (currentScaler.classList.contains('bottom-left')) {
          const height = original_height + (e.pageY - original_mouse_y)
          const width = original_width - (e.pageX - original_mouse_x)
          if (height > minimum_size) {
            element.style.height = height + 'px'
          }
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          }
        }
        else if (currentScaler.classList.contains('top-right')) {
          const width = original_width + (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          }
        }
        else {
          const width = original_width - (e.pageX - original_mouse_x)
          const height = original_height - (e.pageY - original_mouse_y)
          if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
          }
          if (height > minimum_size) {
            element.style.height = height + 'px'
            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
          }
        }
      }
      
      function stopScale() {
        window.removeEventListener('mousemove', scale)
      }
    }
  }
  
  makeScalableDiv('.scalable')