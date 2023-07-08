document.addEventListener("keydown", (e) =>{
    if (e.key == "Enter"){
        Calcular()
    } if (e.key == "Escape"){
        Clear()
    }
})

function insert(num)
{
    var numero = document.getElementById('resultado').value;

    document.getElementById('resultado').value = numero + num;

}
function Clear()
{
    document.getElementById('resultado').value = "";
}
function back()
{
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length -1);
}
function Calcular()
{
    
    var resultado = document.getElementById('resultado').value;
    if(resultado)
    {
        document.getElementById('resultado').value = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').value = "Nada..."
    }
}


