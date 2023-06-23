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
  window.location.href = "index_GE.html";
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
    <h3>მოკლე ზოგადი მიმოხილვა</h3>
    კომპ. მეცნიერების მხარე მოიცავს:
    <ul>
    <li>პროგრამირების ენებს</li>
    <li>ვიდეო თამაშებს</li>
    <li>სხვა პროექტებს</li>
    </ul>
    <br />
    შემოქმედებითი მხარე მოიცავს:
    <ul>
    <li>ჩანახატებსა და პოემებს</li>
    <li>პუბლიცისტურ ნაშრომებს</li>
    <li>სხვა პროექტებს</li>
    </ul>
    </div>
    `;
  } else if (show_cs_info) {
    let _info = document.getElementById("info");
    _info.innerHTML = `
    <div class="Additional-Info">
    <h3>მოკლე მიმოხილვა</h3>
    კომპ. მეცნიერების მხარე მოიცავს:
    <ul>
    <li>პროგრამირების ენებს</li>
    <li>ვიდეო თამაშებს</li>
    <li>სხვა პროექტებს</li>
    </ul>
    </div>
    `;
  } else if (show_creative_info) {
    let _info = document.getElementById("info");
    _info.innerHTML = `
    <div class="Additional-Info">
    <h3>მოკლე მიმოხილვა</h3>
    შემოქმედებითი მხარე მოიცავს:
    <ul>
      <li>ჩანახატებსა და პოემებს</li>
      <li>პუბლიცისტურ ნაშრომებს</li>
      <li>სხვა პროექტებს</li>
    </ul>
    </div>
    `;
  } else {
    document.getElementById("info").innerHTML = ``;
  }
}

// ------------------- OPENING COMPUTER SCIENCE RESUME ------------------- #
function open_cs_resume() {
  window.location.href = "cs_GE.html";
}

// ------------------- OPENING CREATIVE WRITING RESUME ------------------- #
function open_creative_resume() {
  window.location.href = "creative_GE.html";
}
