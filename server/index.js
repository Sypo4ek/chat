const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 9000});

const messages = []

function onConnect(ws) {
  ws.send(JSON.stringify(messages));

  ws.on('message', function(message, isBinary) {
    messages.push(JSON.parse(message));
    wsServer.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message, { binary: isBinary });
      }
    });
    
  })
  ws.on('close', function() {
      console.log('Пользователь отключился');
    })
}

wsServer.on('connection', onConnect);