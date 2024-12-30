const express = require('express');
const userRouter = require('./components/router');
require('dotenv').config({ path: 'src/config/.env' });

require('./utils/db/objection')
const app = express();

app.use(express.json());
app.use('/api/v1', userRouter);
app.use('/', (req, res) => res.status(404).json({ status: false, message: 'route not found' }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
