// ------------------- EMPTY THE MAIN DIV ------------------- #
function empty_main_div() {
  let main_div = document.getElementById("Main");
  main_div.replaceChildren();
  return main_div;
}

// ------------------- CHOOSING THE MAIN OPTIONS ------------------- #
function choose_between_resumes() {
  window.location.href = "index.html";
}

// Main Option Animations
function mouse_over_cs() {
  let _info = document.getElementById("info");
  _info.innerHTML = `
  <div class="Additional-Info">
  <h3>Short Summary</h3>
  The CS side of my resume contains:
  <ul>
    <li>Programming Languages I Know</li>
    <li>The Games I Developed</li>
    <li>Other Mini Projects</li>
  </ul>
  </div>
  `;
}

function mouse_over_creative() {
  let _info = document.getElementById("info");
  _info.innerHTML = `
  <div class="Additional-Info">
  <h3>Short Summary</h3>
  The CREATIVE side of my resume contains:
  <ul>
    <li>My Short Novels & Poems</li>
    <li>My Public Writings</li>
    <li>Other Creative Projects</li>
  </ul>
  </div>
  `;
}

function mouse_leave_info() {
  let _info = document.getElementById("info");
  _info.replaceChildren();
}

// ------------------- OPENING COMPUTER SCIENCE RESUME ------------------- #
function open_cs_resume() {
  window.location.href = "cs.html";
}

// ------------------- OPENING CREATIVE WRITING RESUME ------------------- #
function open_creative_resume() {
  window.location.href = "creative.html";
}
