/**
 * 
 * by Raul Castro
 */


 const content = null || document.getElementById('container')

 const dataInserida = null || document.getElementById('resposta')


 content.innerHTML = `<div class="mt-5"> 
 <h3>
 Digite sua data de nascimento e mostrarei a tua idade:
 </h3> 

 <input type="date" name="inputData" class="form-control col-4" />

 </div>`

dataInserida.innerHTML=`<div>

<p>

A sua idade é ${reposta}

</p>

</div>`