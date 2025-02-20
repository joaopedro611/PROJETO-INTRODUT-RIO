//CÓDIGO JS PARA PROGRAMAR A PÁGINA(BOTÃO PARA TELA SER CLARA OU ESCURA)

function toggleMode() {
  const html = document.documentElement //SERVE PARA PEGAR O HTML
  html.classList.toggle("light") //FZND A TROCA DE COR
  //CÓDIGO MENOR MAS COM A MSM FUNÇÃO

  //PEGAR A TAG img
  const img = document.querySelector("#profile img") //query: pesquisa pelo seletor

  //SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    //SE TIVER "LIGHT MODO " ADD A IMAGEM LIGHT
    img.setAttribute("src", "./assets/avatar-light.png") //setAtribute: MODIFICAR/AJUSTAR O ATRIBUTO
  } else {
    //SE TIVER SEM "LIGHT MODO" MANTER A IMAGEM NORMAL
    img.setAttribute("src", "./assets/avatar.png")
  }
}
