// led (pin 36)

var Cylon = require('cylon');

Cylon.api('http', {
  host: '192.168.43.150',
  port: '3000'
});

Cylon.robot({
  name: 'led',

  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    led: { driver: 'led', pin: 36 }
  }
}).start();
