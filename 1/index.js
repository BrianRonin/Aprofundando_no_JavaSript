var confirmar = () => {
   var confirmou = confirm('Voce quer somar 2 numeros?')
   console.log(confirmou)
   
   
   
   if (confirmou == true) {
      num1 = prompt('Digite o numero 1')
      
      num2 = prompt('Digite o numero 2')

      num1 = parseFloat(num1)
      num2 = parseFloat(num2)

      console.log(num1)
      console.log(num2)

      resultado = num1 + num2

      alert (`O resultado é ${resultado}`)

      console.log('a')
   } else if (confirmou == false) {
      confirmar()
   }
   
}

confirmar()