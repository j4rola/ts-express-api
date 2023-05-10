import express from 'express';
import { logger } from './services/stringService';
import cors from 'cors'; 


const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send(logger());
});

app.get('/test', (req, res) => { 
  res.send('test');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');   
});    