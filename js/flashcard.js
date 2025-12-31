function flipCard(id = 'flashcard') {
  const card = document.getElementById(id);
  if (!card) return;
  card.classList.toggle('is-flipped');
}

// convenience: show answer flips to back
function showAnswerFlip(id = 'flashcard') {
  const card = document.getElementById(id);
  if (!card) return;
  card.classList.add('is-flipped');
}
