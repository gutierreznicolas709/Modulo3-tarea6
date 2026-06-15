const http = require('http');

const data = JSON.stringify({
  nombre: "Maria",
  mensaje: "Hola comunidad"
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/registro',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });
  res.on('end', () => {
    console.log('Respuesta del servidor:');
    console.log(body);
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(data);
req.end();
