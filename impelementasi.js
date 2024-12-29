let users = [];
let products = [];
let transactions = [];
let categories = [];
let reviews = [];

// CRUD Endpoints for Users
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map((user) => (user.id === parseInt(id) ? updatedUser : user));
  res.json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.status(204).send();
});

// CRUD Endpoints for Products
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  products = products.map((product) =>
    product.id === parseInt(id) ? updatedProduct : product
  );
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  products = products.filter((product) => product.id !== parseInt(id));
  res.status(204).send();
});
