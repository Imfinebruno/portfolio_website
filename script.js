const azul = document.getElementById("azul");
const titulo = document.getElementById("titulo");
const tituloMobile = document.getElementById("titulo-mobile");
const texto = document.getElementById("texto");
const setaClick = document.getElementById("seta-click");
const menu = document.getElementById("menu");
const btnAbrir = document.getElementById("abrir");
const opcoesMenu = document.querySelectorAll(".opcao");
const darkMode = document.getElementById("dark-btn");

opcoesMenu.forEach(opcao => {
    opcao.addEventListener('click', () => menu.classList.remove("ativo"));
});

//ABRIR MENU
btnAbrir.addEventListener('click',() =>{
    menu.classList.toggle("ativo")
});


// COBRIR BACKGROUND AZUL //
setaClick.addEventListener('click', () => {
    azul.classList.toggle("cover");
    titulo.classList.toggle("slide");
    texto.classList.toggle("texto-show");
    setaClick.classList.toggle("seta-slide");
    tituloMobile.classList.toggle("slide");
});

darkMode.addEventListener('click', ()=>{
    document.querySelector('html').classList.toggle("dark-mode");
})


// function coverBackground(event){
//     azul.classList.toggle("cover");
//     titulo.classList.toggle("slide");
//     texto.classList.toggle("texto-show");
//     setaClick.classList.toggle("seta-slide");

//     tituloMobile.classList.toggle("slide")
// }

// setaClick.addEventListener('click', function(){
//     coverBackground()
// });








//FUNÇÃO ANIMAR AO SCROLL//

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    console.log(windowTop);
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll(); //ativar a função independente da interação do usuario

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
} //nao ativar caso nao tenha elementos com a classe na pagina

