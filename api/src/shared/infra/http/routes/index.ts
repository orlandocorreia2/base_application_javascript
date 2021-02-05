import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users_routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions_routes';
import passwordRouter from '@modules/users/infra/http/routes/password_routes';
import profileRouter from '@modules/users/infra/http/routes/profile_routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

routes.get('/', (_, response) => response.json({ message: 'Hello World' }));

export default routes;
