import express from 'express';
import 'dotenv/config';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// default app
export default app;
