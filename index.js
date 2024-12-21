const express = require('express');
const app = express();
const PORT = 3000;
const employees = [
  { id: 1, name: "Tony", age: 25 },
  { id: 2, name: "Bella", age: 20 },
  { id: 3, name: "Jack", age: 18 }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Xoş gəldiniz! İşçiləri görmək üçün /employees endpoint-dən istifadə edin.');
});

app.get('/employees', (req, res) => {
  res.json(employees);
});

app.get('/employees/:id', (req, res) => {
  const employee = employees.find(emp => emp.id == req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

app.post('/employees', (req, res) => {
  const { id, name, age } = req.body;
  
  if (!id || !name || !age) {
    return res.status(400).json({ error: "All fields (id, name, age) are required" });
  }

  const newEmployee = { id, name, age };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
