(() => {

  let button = document.getElementById('initCharge');

  button.addEventListener('click', (e) => {
    let advance = 0;
    document.getElementById("messagge").innerHTML = '';
    let slider = document.getElementById('slider');

    let interval = setInterval(() => { 
      if (advance <= 100) {
        advance += getAdvance();
        slider.style.width = `${advance}%`;
      } else {
        clearInterval(interval);
        document.getElementById("messagge").innerHTML = '¡Carga Exitosa!';
      } 
    }, getTime());
  });

  function getAdvance(){
    return Math.floor((Math.random() * 5) + 1);
  }

  function getTime(){
    return Math.floor((Math.random() * 100) + 1);
  }


})();