// https://scrimba.com/p/pG66Msa/c9PLazU3:
//
// innerHTML - security risk
// innerText - "expensive"
// textContent - best; neither insecure nor slow

document.getElementById('add-text').textContent = 'Freshly added!';