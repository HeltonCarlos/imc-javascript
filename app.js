(function(){
  document.querySelector('#calcular').addEventListener('click',e=>{
    var peso =document.getElementById('peso').value
    var altura=document.getElementById('altura').value
    var resposta=document.querySelector('#resposta')


    var imc=peso/(altura*altura)
  
    if(!peso | !altura){
        alert('Digite as informações!')
    }
     else{
      resposta.innerHTML+=`<p>
      Seu I.M.C é: ${imc}
      </p> 
    `;
    }
  })

})();