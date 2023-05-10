import express from 'express';
import { getCustomString } from './services/stringService';
import cors from 'cors'; 


const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send(getCustomString('My Custom String'));
});

app.get('/test', (req, res) => { 
  res.send('test');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');   
});    