document.querySelector('#calcular').addEventListener('click',e=>{
  var peso =document.querySelector('#peso').value
  var altura=document.querySelector('#altura').value
  var resposta=document.querySelector('#resposta')

  if(!peso || !altura){
      alert('Digite as informações!')
  }else{

    resposta.innerHTML+=`seu peso é ${peso}, e sua altura é ${altura}`;
  }
})