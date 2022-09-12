// Katlal on kolm temperatuurivahemikku

// 0-20 on liiga külm
// 21-40 on paras temperatuur
// 41-60 on liiga kuum

// Looge funktsioon checkTemp mis võtab sisendiks temperatuuri ja tagastab vahemike puhul järgneva numbri:

// Liiga külm tagastab -1
// Paras temperatuur tagastab 0
// Liiga kuum tagastab 1

// Töö salvestada faili nimega "checkTemp.js" ja laadida Githubi
// NB! Faili nimes on olulised suured ja väikesed tähed.

function checkTemp(temp) {
  return temp < 21 ? -1 : temp < 41 ? 0 : 1
}