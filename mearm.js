// right (pin 12) - bottom: 40, top: 100
// left (pin 11) - bottom: 40, top: 70 (inverted)
// claw (pin 15) - bottom: 50, top: 120
// base (pin 13) - bottom: 0, top: 180

var Cylon = require('cylon');

Cylon.api('socketio', {
  host: '192.168.43.150',
  port: '3000'
});

Cylon.robot({
  name: 'mearm',

  commands: function() {
    return {
      set_angle: this.setAngle
    }
  }

  connections: {
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    rightServo: {
      driver: 'servo',
      pin: 12,
      freq: 50,
      pulseWidth: { min: 500, max: 2400 },
      limits: { bottom: 40, top: 100 }
    },
    leftServo: {
      driver: 'servo',
      pin: 11,
      freq: 50,
      pulseWidth: { min: 500, max: 2400 },
      limits: { bottom: 40, top: 70 }
    },
    clawServo: {
      driver: 'servo',
      pin: 15,
      freq: 50,
      pulseWidth: { min: 500, max: 2400 },
      limits: { bottom: 50, top: 120 }
    },
    baseServo: {
      driver: 'servo',
      pin: 13,
      freq: 50,
      pulseWidth: { min: 500, max: 2400 },
      limits: { bottom: 0, top: 180 }
    }
  },
}).start();
