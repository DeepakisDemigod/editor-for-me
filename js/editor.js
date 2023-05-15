let editor_html = ace.edit("editor-html");
editor_html.setTheme("ace/theme/cobalt");
editor_html.session.setMode("ace/mode/html");
editor_html.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>app</title>
</head>
<body>
  
  <!-- your code here -->
  
  <script src="main.js"></script>
</body>
</html>


`, -1);



// html code ends

// css code starts

let editor_css = ace.edit("editor-css");
editor_css.setTheme("ace/theme/cobalt");
editor_css.session.setMode("ace/mode/css");
editor_css.setValue(`


`, -1);




// css code ends

// js code starts


let editor_js = ace.edit("editor-js");
editor_js.setTheme("ace/theme/cobalt");
editor_js.session.setMode("ace/mode/javascript");
editor_js.setValue(`console.log('hello world')




`, -1);



let web = document.getElementById('output')



function showWeb() {
  let editor_container_html = document.getElementById('editor-container-html')
  let editor_container_css = document.getElementById('editor-container-css')
  let editor_container_js = document.getElementById('editor-container-js')
  let editor_result = document.getElementById('editor-result')
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "none"
  editor_result.style.display = "block"
}

function run() {
  let htmlcode = editor_html.getValue();
  let csscode = editor_css.getValue();
  let jscode = editor_js.getValue();
  web.contentDocument.body.innerHTML = htmlcode + '<style>' + csscode + '</style>'
  web.contentWindow.eval(jscode)
  showWeb()
}


const runButton = document.getElementById('run')

runButton.addEventListener('click', () => {
  run()
})

run()
