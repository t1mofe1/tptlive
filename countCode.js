// Meile on antud array koodidega. Oleks vaja luua funktsioon mis loeb kokku mitu koodi algavad kindla algustähega. Suured-väiksed tähed on olulised.
 
// Näiteks soovime kokku lugeda mitu koodi algavad "i" tähega.
// Selleks käivitame funktsiooni countCode("i") mis tagastab numbri 4
// Funktsioon countCode(letter) tuleb teil ise kirjutada.
 
// Data array saab sellelt aadressilt https://raw.githubusercontent.com/timotr/progre-helper/main/data.js
 
// Abiks tulevad teadmised kuidas...
// * … array seest elemente kätte saada. Otsi `access array elements`
// * … muutujas olevat numbrit suurendada 1 võrra. Otsi `increase number by one`
// * ... for tsükli abil numbreid genereerida. Otsi `loop n times` või `iterate array`
// * … kontrollida kas tekst algab või sisaldab mingit sõna. Otsi `string starts with`
// * ... parameetriga funktsiooni luua ning funktsiooniga väärtus tagastada. Otsi `examples of function` või `what is function` või `https://www.programiz.com/javascript/function`

const data = ["FWmcfgAWxe", "KnFJXGcACq", "cCYApSPiX0", "iHwbq2giBx", "X5Ebl6sjLf", "Rxc2oFCgI4", "jFtFONF7NK", "b8iIhVOJl6", "aGlxlytbic", "30e8YSgLzd", "0oj65bHiHZ", "NtykZPC0DH", "qgj6THRgT0", "rFM7G7SJbB", "lcu5UKrj7w", "xurxryxn5u", "7XDXFJ8Axh", "RuQU6EeJyi", "go3SD5CYYT", "c8sOoXTa59", "Vh0QfTkdKk", "rrYBTg4sWc", "CmeWiA73ig", "iM8MD2IXle", "SQk4WlTLiE", "wn3JhYo93i", "Hlh1Amt1jo", "Rd6hiOekcE", "LMKIBsBBmQ", "nb72pL5LKQ", "8GufbXPMRb", "OO5OnLzsdP", "hLddf4izXl", "6x8suntNs6", "8VATvVOQZR", "jxL8zSOcZN", "87YqnuB6Mc", "sqr1WbVsWv", "fLC17MbW59", "tJ6Z5r6mDd", "iiEffxACk7", "C6w4k9AS2N", "9rQTNM8xmG", "x4JQLDr6hd", "3bYXSm7Zgo", "phTYCmMxOW", "isl31Fd0SN", "CZItvlfdqW"];

function countCode(letter) {
  return data.filter((code) => code.startsWith(letter)).length;
}