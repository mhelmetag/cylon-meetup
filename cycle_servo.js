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
      pin: 12,
      freq: 50,
      pulseWidth: { min: 500, max: 2400 },
      limits: { bottom: 40, top: 100 }
    }
  },

  work: function(my) {
    var angle = 40,
        increment = 10;

    every((1).seconds(), function() {
      angle += increment;

      my.servo.angle(angle);

      console.log('Current Angle: ' + my.servo.currentAngle());

      if ((angle === 40) || (angle === 100)) {
        increment = -increment;
      }
    });
  }
}).start();
