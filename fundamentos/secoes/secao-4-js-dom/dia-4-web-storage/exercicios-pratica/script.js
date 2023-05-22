window.onload = () => {
    // Função para definir a cor de fundo
    const setBackgroundColor = (color) => {
      let content = document.querySelector(".content")
      content.style.backgroundColor = color
      localStorage.setItem("backgroundColor", color) // Salva a cor de fundo no localStorage
    }
  
    // Função para definir a cor do texto
    const setFontColor = (color) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.color = color
      }
      localStorage.setItem("fontColor", color) // Salva a cor do texto no localStorage
    }
  
    // Função para definir o tamanho da fonte
    const setFontSize = (size) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontSize = size
      }
      localStorage.setItem("fontSize", size) // Salva o tamanho da fonte no localStorage
    }
  
    // Função para definir o espaçamento entre as linhas do texto
    const setLineHeight = (height) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.lineHeight = height
      }
      localStorage.setItem("lineHeight", height) // Salva o espaçamento entre linhas no localStorage
    }
  
    // Função para definir o tipo de fonte
    const setFontFamily = (family) => {
      let paragraphs = document.querySelectorAll(".paragraph")
      for (let index = 0; index < paragraphs.length; index += 1) {
        paragraphs[index].style.fontFamily = family
      }
      localStorage.setItem("fontFamily", family) // Salva o tipo de fonte no localStorage
    }
  
    // Cor de fundo da tela;
    let backgroundColorButtons = document.querySelectorAll("#background-color>button")
    for (let index = 0; index < backgroundColorButtons.length; index += 1) {
      backgroundColorButtons[index].addEventListener("click", (event) => {
        setBackgroundColor(event.target.innerHTML) // Define a cor de fundo quando um botão é clicado
      })
    }
  
    // Cor do texto;
    let fontColorButtons = document.querySelectorAll("#font-color>button")
    for (let index = 0; index < fontColorButtons.length; index += 1) {
      fontColorButtons[index].addEventListener("click", (event) => {
        setFontColor(event.target.innerHTML) // Define a cor do texto quando um botão é clicado
      })
    }
  
    // Tamanho da fonte
    let fontSizeButtons = document.querySelectorAll("#font-size>button")
    for (let index = 0; index < fontSizeButtons.length; index += 1) {
      fontSizeButtons[index].addEventListener("click", (event) => {
        setFontSize(event.target.innerHTML) // Define o tamanho da fonte quando um botão é clicado
      })
    }
  
    // Espaçamento entre as linhas do texto;
    let lineHeightButtons = document.querySelectorAll("#line-height>button")
    for (let index = 0; index < lineHeightButtons.length; index += 1) {
      lineHeightButtons[index].addEventListener("click", (event) => {
        setLineHeight(event.target.innerHTML) // Define o espaçamento entre linhas quando um botão é clicado
      })
    }
  
    // Tipo da fonte (Font family)
    let fontFamilyButtons = document.querySelectorAll("#font-family>button")
    for (let index = 0; index < fontFamilyButtons.length; index += 1) {
      fontFamilyButtons[index].addEventListener("click", (event) => {
        setFontFamily(event.target.innerHTML) // Define o tipo de fonte quando um botão é clicado
      })
    }
  
    // Função de inicialização que restaura as preferências do usuário
    const initialize = () => {
      let backgroundColor = localStorage.getItem("backgroundColor")
      if (backgroundColor) setBackgroundColor(backgroundColor)
      let fontColor = localStorage.getItem("fontColor")
      if (fontColor) setFontColor(fontColor)
      let fontSize = localStorage.getItem("fontSize")
      if (fontSize) setFontSize(fontSize)
      let lineHeight = localStorage.getItem("lineHeight")
      if (lineHeight) setLineHeight(lineHeight)
      let fontFamily = localStorage.getItem("fontFamily")
      if (fontFamily) setFontFamily(fontFamily)
    }
  
    initialize() // Chama a função de inicialização ao carregar a página
  }
  