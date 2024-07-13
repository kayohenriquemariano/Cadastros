import express from 'express'
import router from './routes.js';


const app = express();

//usar o router
app.use(express.json())

app.use(router)


export default app;
