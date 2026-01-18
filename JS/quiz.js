function corrigerQuiz() {
  let score = 0;

  const bonnesReponses = {
    q1: 'a',
    q2: 'b',
    q3: 'a',
    q4: 'a',
    q5: 'a',
    q6: 'a',
    q7: 'a',
    q8: 'b',
    q9: 'a',
    q10: 'a',
    q11: 'a',
    q12: 'a',
    q13: 'a',
    q14: 'a',
    q15: 'a'
  };

  for (let q in bonnesReponses) {
    const reponse = document.querySelector(
      'input[name="' + q + '"]:checked'
    );
    if (reponse && reponse.value === bonnesReponses[q]) {
      score++;
    }
  }

  let message = "";
  if (score >= 13) {
    message = "Excellent ";
  } else if (score >= 9) {
    message = " bien ";
  } else if (score >= 6) {
    message = "Passable ";
  } else {
    message = "À améliorer ";
  }

  document.getElementById("resultat").textContent =
    "Votre score : " + score + " / 15 – " + message;
}
