// --------------------------- OPEN & CLOSE SKILL LIST --------------------------- #
let skill_list_open = false;

function open_skill_list() {
  skill_list_open = !skill_list_open;

  document.getElementById("hidden-skill-tree").style.display = skill_list_open
    ? "block"
    : "none";
}

window.onresize = function () {
  if (window.innerWidth >= 1000) {
    skill_list_open = false;
    document.getElementById("hidden-skill-tree").style.display = skill_list_open
      ? "block"
      : "none";
  }
};
