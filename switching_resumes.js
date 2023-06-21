let win_width = window.innerWidth;
let show_cs_info = false;
let show_creative_info = false;

window.onload = function () {
  show_info();
};
window.onresize = function () {
  win_width = window.innerWidth;
  show_cs_info = false;
  show_creative_info = false;
  show_info();
};

// ------------------- CHOOSING THE MAIN OPTIONS ------------------- #
function choose_between_resumes() {
  window.location.href = "index.html";
}

// Main Option Animations

function mouse_over_cs() {
  show_cs_info = true;
  show_info();
}

function mouse_over_creative() {
  show_creative_info = true;
  show_info();
}

function mouse_leave_info() {
  show_cs_info = false;
  show_creative_info = false;

  show_info();
}

function show_info() {
  if (win_width < 1000) {
    show_cs_info = true;
    show_creative_info = true;
  }

  if (show_cs_info && show_creative_info) {
    document.getElementById("info").innerHTML = `
    <div class="Additional-Info">
    <h3>Short Overall Summary</h3>
    The CS side of my resume contains:
    <ul>
      <li>Programming Languages I Know</li>
      <li>The Games I Developed</li>
      <li>Other Mini Projects</li>
    </ul>
    <br />
    The CREATIVE side of my resume contains:
    <ul>
      <li>My Short Novels & Poems</li>
      <li>My Public Writings</li>
      <li>Other Creative Projects</li>
    </ul>
    </div>
    `;
  } else if (show_cs_info) {
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
  } else if (show_creative_info) {
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
  } else {
    document.getElementById("info").innerHTML = ``;
  }
}

// ------------------- OPENING COMPUTER SCIENCE RESUME ------------------- #
function open_cs_resume() {
  window.location.href = "cs.html";
}

// ------------------- OPENING CREATIVE WRITING RESUME ------------------- #
function open_creative_resume() {
  window.location.href = "creative.html";
}
