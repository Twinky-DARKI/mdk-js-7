// Задача 1: Кнопка, которая скрывает себя по клику
document.addEventListener("DOMContentLoaded", function () {
  const selfHideBtn = document.getElementById("selfHideBtn")
  selfHideBtn.addEventListener("click", function () {
    selfHideBtn.style.backgroundColor = "yellow"
    setTimeout(function () {
      selfHideBtn.style.display = "none"
    }, 200)
  })

  // Задача 2: Кнопка для скрытия/показа текстового блока
  const toggleTextBtn = document.getElementById("toggleTextBtn")
  const textDiv = document.getElementById("text")
  toggleTextBtn.addEventListener("click", function () {
    toggleTextBtn.style.border = "2px solid orange"
    setTimeout(function () {
      toggleTextBtn.style.border = ""
    }, 200)
    if (textDiv.style.display === "none" || getComputedStyle(textDiv).display === "none") {
      textDiv.style.display = "block"
    } else {
      textDiv.style.display = "none"
    }
  })

  // Задача 3: Кнопка с событием mouseover
  const hoverBtn = document.getElementById("hoverBtn")
  hoverBtn.addEventListener("mouseover", function () {
    hoverBtn.style.backgroundColor = "lightgreen"
  })
  hoverBtn.addEventListener("mouseout", function () {
    hoverBtn.style.backgroundColor = ""
  })

  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase()
    if (key === "r") {
      document.body.style.backgroundColor = "red"
    } else if (key === "g") {
      document.body.style.backgroundColor = "green"
    } else if (key === "b") {
      document.body.style.backgroundColor = "blue"
    }

    // Задача 4: Перемещение блока по экрану
    const block = document.getElementById("movableBlock")
    if (block) {
      const currentTop = parseInt(window.getComputedStyle(block).top, 10)
      const currentLeft = parseInt(window.getComputedStyle(block).left, 10)
      let newTop = currentTop
      let newLeft = currentLeft

      if (key === "w") {
        newTop = currentTop - 1
      } else if (key === "s") {
        newTop = currentTop + 1
      } else if (key === "a") {
        newLeft = currentLeft - 1
      } else if (key === "d") {
        newLeft = currentLeft + 1
      }
      block.style.top = newTop + "px"
      block.style.left = newLeft + "px"
    }
  })

  document.addEventListener("keyup", function (e) {
    const key = e.key.toLowerCase()
    if (key === "r" || key === "g" || key === "b") {
      document.body.style.backgroundColor = ""
    }
  })
})
