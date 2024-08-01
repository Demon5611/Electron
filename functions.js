document.onkeydown = function (e) {
  const displayElement = document.getElementById("container");


  let id;
  if (e.keyCode >= 48 && e.keyCode <= 57) { 
    id = (e.keyCode - 48).toString(); 
  } else if (e.keyCode >= 65 && e.keyCode <= 90) {  
    id = String.fromCharCode(e.keyCode);  
  } else {
   
    alert("Клавиша не обнаружена!");
    return;  
  }


  const audioElement = document.getElementById(id);
  if (audioElement) {
    audioElement.play();
    displayElement.innerText = id;
  } else {
    console.error(`Не найден элемент с id: ${id}`);
  }
};
