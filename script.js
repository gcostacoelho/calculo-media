function calcular(){
    var divAprovacao = document.getElementById("aprovacao");
    var nota1 = parseFloat(document.getElementById('nota-1').value);
    var nota2 = parseFloat(document.getElementById('nota-2').value);
    var nota3 = parseFloat(document.getElementById('nota-3').value);
    var media = (nota1 + nota2 + nota3)/3;
    
    if (media >=6.00){
        htmlAprovado = '<p class="aprovacao">Aprovado</p>'
    }else{
        htmlAprovado = '<p class="aprovacao">Reprovado</p>'
    }
    
    document.getElementById('saida').value = media.toFixed(2);
    divAprovacao.innerHTML = htmlAprovado;
}