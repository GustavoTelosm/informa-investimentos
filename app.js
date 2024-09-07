
function pesquisar()
{
    let section = document.getElementById
    ("resultados-pesquisa")
    
    let campopesquisa = document.getElementById
    ("campo-pesquisa").value



    if(campopesquisa == ""){
        section.innerHTML = "Digite alguma coisa para procurar."
        return

    }


    campopesquisa = campopesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for(let dados of dado_categorias){
    titulo = dados.titulo.toLowerCase()
    descricao = dados.descricao.toLowerCase()
    tags = dados.tags.toLowerCase()

    if(titulo.includes(campopesquisa) || descricao.includes(campopesquisa) || tags.includes(campopesquisa))
    {
        resultados += `
            <div class="item-resultado">
            <h2>${dados.titulo}</h2>
            <p class="descricao-meta">${dados.descricao}</p>
            <p class="descricao-meta">${dados.descricao_sim}</p>
            <a href="${dados.link}" target="_blank"> Clique aqui para mais inforamções</a>
            </div>
            `;
    }

}

    if(!resultados){
        resultados = "Opss não encontrei nada, Veja se digitou corretamente o que está procurando."

    }


    section.innerHTML = resultados;
    
}








    



