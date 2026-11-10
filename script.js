let ecran = document.getElementById('ecran');
let premierNombre = "";
let operateur = "";
let nouveauNombre = true;

function ajouter(v){
  if(v >= '0' && v <= '9' || v == '.' || v == '00'){
    if(nouveauNombre){
      ecran.value = v;
      nouveauNombre = false;
    } else {
      ecran.value = ecran.value + v;
    }
  } else {
    if(premierNombre == ""){
      premierNombre = ecran.value;
    } else if(!nouveauNombre){
      calculer();
      premierNombre = ecran.value;
    }
    operateur = v;
    nouveauNombre = true;
  }
}

function effacerTout(){
  ecran.value = "";
  premierNombre = "";
  operateur = "";
  nouveauNombre = true;
}

function effacerUn(){
  ecran.value = ecran.value.slice(0, -1);
}

function calculer(){
  if(premierNombre == "" || operateur == "") return;
  let a = parseFloat(premierNombre);
  let b = parseFloat(ecran.value);
  let resultat = 0;
  if(operateur == '+') resultat = a + b;
  if(operateur == '-') resultat = a - b;
  if(operateur == '×') resultat = a * b;
  if(operateur == '÷') resultat = a / b;
  if(operateur == '%') resultat = a % b;
  ecran.value = resultat;
  premierNombre = "";
  operateur = "";
  nouveauNombre = true;
}