import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { schedulersRoutes } from './schedulers.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/schedulers', schedulersRoutes);

export default routes;