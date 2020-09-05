import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  response.send('API version 1.0.0');
});

export default routes;
