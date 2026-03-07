// proxy.mjs
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://127.0.0.1:5173' 
}));

app.use(express.json());



app.post('/api/register', async (req, res) => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkB-EJRKaxOuvmw5x9c2c5ZSdpRmZBWeqdhnt_XbZncAstoEreGlOGRAit96FbUjJv/exec';

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ result: 'error', message: 'Proxy connection failed' });
  }
});

app.post('/api/waitlist', async (req, res) => {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz63VnmbdTmFXPB1I6uQJg-r2AsfqcHolVwIQdUiauKmqvaM4Qa-cTwwrlLmDNMWF2b/exec';

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ result: 'error', message: 'Proxy connection failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});