// ------------------- EMPTY THE MAIN DIV ------------------- #
function empty_main_div() {
  var main_div = document.getElementById("Main");
  main_div.replaceChildren();
  return main_div;
}

// ------------------- CHOOSING THE MAIN OPTIONS ------------------- #
function choose_between_resumes() {
  var _main = empty_main_div();
  _main.innerHTML = `<div class="WhichResume">
  <h2>Choose The Theme</h2>
  <div class="choose-resume-buttons">
    <button onclick="open_cs_resume()">Computer Science</button>
    <button onclick="open_creative_resume()">Creative Writing</button>
  </div>
</div>`;
}

// ------------------- OPENING COMPUTER SCIENCE RESUME ------------------- #
function open_cs_resume() {
  var _main = empty_main_div();
}

// ------------------- OPENING CREATIVE WRITING RESUME ------------------- #
function open_creative_resume() {
  empty_main_div();
}
