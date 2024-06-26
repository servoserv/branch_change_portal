const express = require('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());
app.use('/api', adminRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});