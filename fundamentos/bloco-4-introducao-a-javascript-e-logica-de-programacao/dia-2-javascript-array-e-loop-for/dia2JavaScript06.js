let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;
for (let index = 0; index<numbers.length; index+= 1 )
{
    if (numbers[index]%2 == 1)
    {
        numerosImpares = numerosImpares +=1; 
    }
    
}
if(numerosImpares > 0)
{
    console.log("Existem "+ numerosImpares +" numeros impares" );
}else{
    console.log("Não existe numero impares")
}







