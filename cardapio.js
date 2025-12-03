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
criarItemCardapio(
    'Bolo de Chocolate',
    'Um clássico irresistível com camadas de chocolate',
    'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/05/bolo_chocolate_leite.jpg'
)
criarItemCardapio(
    'Bolo de Morango',
    'O nosso deliciosso bolo de morango, super refrescante e perfeito para todas as ocasioes.',
    'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-bolo-morango-chantilly.jpg?quality=70&strip=info&resize=1080,565&crop=1'
)