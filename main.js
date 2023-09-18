function tocaSom(idElementoAudio) /*parametro*/ {
  document.querySelector(idElementoAudio).play()
}

/* document.querySelector('.tecla_pom').onclick = tocaSomPom;
O ponto vai entrar para dentro daquele elemento que está sendo buscado no querySelector e vai trazer todas propriedades e funcionalidades que são possíveis ser consultadas ou executadas dentro daquele elemento. Então com um ponto o próprio Visual Studio Code abriu uma janelinha de coisas que são possíveis fazer.

E o que queremos aqui agora é acessar o atributo onclick desse elemento, que sabemos que existe porque está lá no HTML, se podemos usar ele no HTML, também podemos usar ele aqui no JavaScript. Então eu vou escrever onclick. Escrevendo onclick eu vou ter acesso a esse atributo e como ele é um atributo, para eu passar e definir um valor para ele, eu uso o sinal de atribuição, o mesmo do HTML, que é o sinal de igual =.*/

//lista de elementos com selectorAll
const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0

//enquanto
while (contador < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contador]
  const instrumento = tecla.classList[1];

  //template string
  const idAudio = `#som_${instrumento}` //string

 // console.log(idAudio)
  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  contador = contador + 1
  //console.log(contador)
}
