const express = require('express');

const app = express();
const port = 3000;
const errorMiddleware = require('./src/middlewares/postMiddleware');

const postRoutes = require('./src/routes/postsRoutes');

app.use(express.json());

app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

app.use(errorMiddleware.errorHandler);
