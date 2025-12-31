// js/state.js
const GameState = {
  teams: [],
  scores: [0, 0, 0, 0],
  currentTeam: 0,
  usedQuestions: {},
 

  nextTeam() {
    this.currentTeam = (this.currentTeam + 1) % this.teams.length;
    saveState();
  }
};


function saveState() {
  localStorage.setItem("craniumState", JSON.stringify(GameState));
}

function loadState() {
  const data = localStorage.getItem("craniumState");
  if (data) Object.assign(GameState, JSON.parse(data));
}

loadState();

const WIN_SCORE = 10;
