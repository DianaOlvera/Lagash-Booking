let total = 0;
let descu = document.getElementById('discount');
let totales = document.getElementById('subtotal');

$(':checkbox').click(function() { 
  if(this.checked) {
      total = total + 200;
      if(total >= 600){
        descu.innerHTML = 'Obtuviste un 50% de descuento';
        totales.innerHTML = (50*total)/100;
      }else{
        descu.innerHTML = ' ';
        totales.innerHTML = total;
      }
  } else {
      total= total - 200;
      if(total == 600){
        totales.innertHTML = (50*total)/100;
        }else{
        descu.innerHTML = ' ';
        totales.innerHTML = total;
        }
    }
  });


let modal = document.getElementById('modal');
let btn = document.getElementById('btn');
let close = document.getElementsByClassName('close')[0];
 
btn.onclick = function() {
  if(total===0){
    btn=disable;
  }
  modal.style.display = 'block';
}

close.onclick = function() {
  modal.style.display = 'none';
}


