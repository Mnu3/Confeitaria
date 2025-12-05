function criarItemCardapio(titulo, descricao, foto){
    const divItemCardipio = document.createElement('div')
    divItemCardipio.className = 'item-cardapio'

    const h3Titulo = document.createElement('h3')
    h3Titulo.textContent = titulo

    const pDescricao = document.createElement('p')
    pDescricao.textContent = descricao
    pDescricao.className = 'descricao'

    const img = document.createElement('img')
    img.src = foto
    img.className = 'img-item'

    const divC = document.getElementById('cardapio')

    divItemCardipio.appendChild(h3Titulo)
    divItemCardipio.appendChild(pDescricao)
    divItemCardipio.appendChild(img)

    divC.appendChild(divItemCardipio)

}

//conexao com o banco de dados
async function getData() {
  const url = "https://confeitaria-api-t8xb.onrender.com/cardapio";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    for(let i = 0; i < result.length; i++){
        criarItemCardapio(
        result.titulo,
        result.descricao,
        result.foto
        )
    }
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

getData()


