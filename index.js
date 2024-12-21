// const express = require('express');
// const app = express();
// const PORT = 3000;
// const employees = [
//   { id: 1, name: "Tony", age: 25 },
//   { id: 2, name: "Bella", age: 20 },
//   { id: 3, name: "Jack", age: 18 }
// ];

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Xoş gəldiniz! İşçiləri görmək üçün /employees endpoint-dən istifadə edin.');
// });

// app.get('/employees', (req, res) => {
//   res.json(employees);
// });

// app.get('/employees/:id', (req, res) => {
//   const employee = employees.find(emp => emp.id == req.params.id);
//   if (employee) {
//     res.json(employee);
//   } else {
//     res.status(404).json({ error: "Employee not found" });
//   }
// });

// app.post('/employees', (req, res) => {
//   const { id, name, age } = req.body;
  
//   if (!id || !name || !age) {
//     return res.status(400).json({ error: "All fields (id, name, age) are required" });
//   }

//   const newEmployee = { id, name, age };
//   employees.push(newEmployee);
//   res.status(201).json(newEmployee);
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });




// request və response tapsirigi

const express = require('express');
const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: 'Süd', price: 2.5, quantity: 100 },
  { id: 2, name: 'Çörək', price: 0.8, quantity: 200 },
  { id: 3, name: 'Yağ', price: 5, quantity: 50 },
  { id: 4, name: 'Şəkər', price: 1.2, quantity: 80 },
  { id: 5, name: 'Qənd', price: 1, quantity: 120 },
  { id: 6, name: 'Makaron', price: 1.5, quantity: 150 },
  { id: 7, name: 'Çay', price: 3, quantity: 40 },
  { id: 8, name: 'Un', price: 0.5, quantity: 300 },
  { id: 9, name: 'Duz', price: 0.6, quantity: 100 },
  { id: 10, name: 'Pendird', price: 4.5, quantity: 60 }
];

app.use(express.json());

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Məhsul tapılmadı!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} ünvanında işə salınıb`);
});
