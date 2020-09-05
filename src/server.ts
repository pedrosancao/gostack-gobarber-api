import express, { json } from 'express';
import routes from './routes';

const app = express();
const port = 3333;

app.use(json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
});
