import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/LoginController';
import './controllers/MainController';
import { AppRouter } from './AppRouter';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['fdskjljfsd'] }));
app.use(AppRouter.getInstance());

const PORT: number = 3000;
app.listen(
  PORT,
  (): void => {
    console.clear();
    console.log(`Server listening on localhost:${PORT}`);
  }
);
