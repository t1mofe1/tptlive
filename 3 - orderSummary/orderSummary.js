// Lugeda tellimuse objekti seest kõik tellimuse kaubad. Printida iga kauba nimi, kogus ja hind konsooli eraldi reale.
// Kõige lõpus printida konsooli tellimuse kogusumma.

// Tellimuse objekti leiab GitHubist https://raw.githubusercontent.com/timotr/progre-helper/main/tellimus.js

// Abiks tulevad teadmised kuidas...
// * ... array seest andmeid lugeda. Otsi `iterate array`
// * ... objekti seest key abil andmeid lugeda. Otsi `access object properties`
// * ... protsentidega arvutada ja hinnale käibemaks lisada. Otsi `add vat to price`

const tellimus = {
  id: 2113,
  orderNumber: 'E210126001',
  createdAt: '2021-01-26 16:04:24',
  clientName: 'Kalle Tali',
  deliveryType: 'Omniva smartpost',
  deliveryValue: 178,
  rows: [
    {
      article_id: 31,
      name: "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
      product_code: '257549',
      price: 49.1666666667,
      amount: 1,
      vat: 0.2,
    },
    {
      article_id: 23420,
      name: 'Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk',
      product_code: '355836',
      price: 5.0666666667,
      amount: 2,
      vat: 0.2,
    },
    {
      article_id: 23421,
      name: 'Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk',
      product_code: '000000000501267301',
      price: 5.825,
      amount: 1,
      vat: 0.2,
    },
  ],
};

for (const row of tellimus.rows) {
  console.log(row.name, row.amount, row.price);
}
console.log(
  tellimus.rows.reduce((sum, row) => sum + row.price * row.amount, 0),
);
