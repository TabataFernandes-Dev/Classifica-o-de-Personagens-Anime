var listaJogadores = [
  
    { imagem: 'https://i.pinimg.com/564x/47/ec/26/47ec263d906ca14ad32492111567e6c8.jpg', nome: 'O1',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
    { imagem: 'https://i.pinimg.com/564x/ed/80/91/ed80916eb70b8603948980aebe71b3f9.jpg', nome: 'A2',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
    { imagem: 'https://i.pinimg.com/564x/1b/bb/10/1bbb10fa16fc79090a262673266e8694.jpg', nome: 'O3',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
    { imagem: 'https://i.pinimg.com/564x/bc/1d/93/bc1d935a03aad98dc02bf7239b2757fd.jpg', nome: 'A4',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
    { imagem: 'https://i.pinimg.com/564x/50/bb/3f/50bb3f707ed09429d00c73dfe40a2c05.jpg', nome: 'O5',  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 },
  
    
  ];
  
  //pega o id da tabela
  var elementoTabela = document.getElementById('tabelaJogadores')
  
  exibirNaTela()                  
  
  function exibirNaTela(){
    //ordena a lista
    listaJogadores.sort(function (x, y){
      return y.escolhas - x.escolhas; //ordem decrescente
    });  
    
    var elemento = " "
    
    //mostra os jogadores em cada posicao 
    for(var i = 0; i<listaJogadores.length ; i++){
    var jogador = listaJogadores[i]
    console.log(jogador)
      
    //mostra na tela os jogadores
    elemento += `
         <tr>
            <td><img src="${listaJogadores[i].imagem}" alt="${listaJogadores[i].nome}"></td>
            <td>${listaJogadores[i].nome}</td>
            <td>${listaJogadores[i].vitoria}</td>
            <td>${listaJogadores[i].derrota}</td>
            <td>${listaJogadores[i].quantidadeEscolha}</td>
            <td>${listaJogadores[i].escolhas}%</td> 
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
            <td><button onClick="selecionarAgente(${i})">Selecionar</button></td>
            <td><button onClick="excluirJogador(${i})">X</button></td>
          </tr>
    `
    }
    
    elementoTabela.innerHTML = elemento
  }
  
  
  function adicionarVitoria(i) {
    var jogador = listaJogadores[i];
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNaTela()
  }
  
  function adicionarDerrota(i) {
    var jogador = listaJogadores[i];
    jogador.derrota++
    exibirNaTela()
  }
  
  function selecionarAgente(i) {
    var jogador = listaJogadores[i];
    jogador.quantidadeEscolha++;
  
    // Calcular a porcentagem
    var totalEscolhas = listaJogadores.reduce((total, jogador) => total + jogador.quantidadeEscolha, 0);
    var porcentagem = (jogador.quantidadeEscolha / totalEscolhas) * 100;
    
    jogador.escolhas = porcentagem.toFixed(2)
  
    // Atualizar a tabela
    exibirNaTela();
  }
  
  function excluirJogador(i){
    var jogador = listaJogadores[i];
    listaJogadores.splice(i, 1);
    exibirNaTela()
  }
  
  function adicionarAgente(){  
    var agente = document.getElementById('adicionarAgente').value
    var imagem = document.getElementById('adicionarImagem').value
    
    const obj = {imagem: imagem, nome: agente,  vitoria: 0, derrota: 0, quantidadeEscolha: 0, escolhas: 0 } // Corrigido para usar 'escolhas'
    listaJogadores.push(obj);
    
    document.getElementById('adicionarAgente').value = ''
    document.getElementById('adicionarImagem').value = ''
    exibirNaTela()
  }  
  
  