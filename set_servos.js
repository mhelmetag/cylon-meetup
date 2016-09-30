// right (pin 12) - bottom: 40, top: 100
// left (pin 11) - bottom: 40, top: 70 (inverted)
// claw (pin 15) - bottom: 50, top: 120
// base (pin 13) - bottom: 0, top: 180

var Cylon = require('cylon');

Cylon.robot({
  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    servo: {
      driver: 'servo',
      pin: 11,
      freq: 50,
      pulseWidth: { min: 500, max: 2400 },
      limits: { bottom: 40, top: 100 }
    }
  },

  work: function(my) {
    my.servo.angle(40);
  }
}).start();
