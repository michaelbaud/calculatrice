var matches = document.querySelectorAll('button');
console.log(matches);

matches.forEach(function(element){
  element.addEventListener('click',afficheNum, false)
});

var input = document.getElementById('affiche');
console.log(input);

function afficheNum(){
  input.value += this.innerHTML;
}

var reset = document.getElementById('reset');
reset.addEventListener('click',effacer,false);
function effacer(){
  input.value="";
}

var result = document.getElementById("result");
result.addEventListener('click',calcul,false);

function calcul(){
  var input = document.getElementById('affiche')
  if(input.value.match(/([0-9]+)\+([0-9]+)/)){
    var a = input.value.split("+");
    var a1 = parseInt(a[0]);
    var a2 = parseInt(a[1]);
    return input.value = a1 + a2;
  }
  else if(input.value.match(/([0-9]+)\-([0-9]+)/)){
    var b = input.value.split("-");
    var b1 = parseInt(b[0]);
    var b2 = parseInt(b[1]);
    return input.value = b1 - b2;
  }
  else if(input.value.match(/([0-9]+)\*([0-9]+)/)){
    var c = input.value.split("*");
    var c1 = parseInt(c[0]);
    var c2 = parseInt(c[1]);
    return input.value = c1 * c2;
  }
  else{
    var d = input.value.split("/");
    var d1 = parseInt(d[0]);
    var d2 = parseInt(d[1]);
    return input.value = d1 / d2;
  }
}
