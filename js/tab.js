let tab_html = document.getElementById('html')
let tab_css = document.getElementById('css')
let tab_js = document.getElementById('js')
let tab_web = document.getElementById('web')


let editor_container_html = document.getElementById('editor-container-html')
let editor_container_css = document.getElementById('editor-container-css')
let editor_container_js = document.getElementById('editor-container-js')
let editor_result = document.getElementById('editor-result')

editor_container_html.style.display = "none"
editor_container_css.style.display = "none"
editor_container_js.style.display = "none"
editor_result.style.display = "block"
tab_web.style.opacity = "1"
runButton.style.display = "none"


tab_html.addEventListener('click', () => {
  editor_container_html.style.display = "block"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "none"
  editor_result.style.display = "none"
  runButton.style.display = "block"
  
  tab_html.style.opacity = "1"
  tab_css.style.opacity = "0.4"
  tab_js.style.opacity = "0.4"
  tab_web.style.opacity = "0.4"
  
})

tab_css.addEventListener('click', () => {
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "block"
  editor_container_js.style.display = "none"
  editor_result.style.display = "none"
  runButton.style.display = "block"
  
  tab_html.style.opacity = "0.4"
  tab_css.style.opacity = "1"
  tab_js.style.opacity = "0.4"
  tab_web.style.opacity = "0.4"  
})

tab_js.addEventListener('click', () => {
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "block"
  editor_result.style.display = "none"
  runButton.style.display = "block"
  
  tab_html.style.opacity = "0.4"
  tab_css.style.opacity = "0.4"
  tab_js.style.opacity = "1"
  tab_web.style.opacity = "0.4"
})

tab_web.addEventListener('click', () => {
  showWeb()
})

function showWeb() {
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "none"
  editor_result.style.display = "block"
  runButton.style.display = "none"
  
  // opacity
  tab_html.style.opacity = "0.4"
  tab_css.style.opacity = "0.4"
  tab_js.style.opacity = "0.4"
  tab_web.style.opacity = "1"

}

