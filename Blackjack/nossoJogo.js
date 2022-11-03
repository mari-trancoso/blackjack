/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const isIniciarRodada = confirm("Bem-vinda(o) ao Blackjack! Você deseja jogar?")

if (isIniciarRodada) {
   console.log("Jogo iniciando...")
   const cartaJogador1 = comprarCarta()
   const cartaJogador2 = comprarCarta()

   let pontosJogador = cartaJogador1.valor + cartaJogador2.valor
   console.log(`Cartas do Jogador: ${cartaJogador1.texto} + ${cartaJogador2.texto} = ${pontosJogador}`)

   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()

   let pontosComputador = cartaComputador1.valor + cartaComputador2.valor
   console.log(`Cartas do Jogador: ${cartaComputador1.texto} + ${cartaComputador2.texto} = ${pontosComputador}`)

   if( pontosJogador > pontosComputador){
      console.log("Jogador venceu!")
   } else if(pontosComputador > pontosJogador){
      console.log("Computador venceu!")
   } else {
      console.log("Empate!")
   }

}  else {
   console.log("Jogo acabou!")
}  
