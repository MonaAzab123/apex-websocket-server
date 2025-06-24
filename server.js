const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send('✅ Hello from Render WebSocket server!');

  ws.on('message', (message) => {
    console.log('Client says:', message);
    ws.send(`🔁 Received: ${message}`);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('WebSocket server running...');
});
