const sizeOfThings = () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    document.querySelector('.window-size').innerHTML = windowWidth + ' x ' + windowHeight;
    
  };
  sizeOfThings();
  
