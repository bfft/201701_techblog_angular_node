function SimulatedCPU() {
    this.utilization = 0;
};

// Create a method which generats random values to simulate
// the value for the CPU utilization.
SimulatedCPU.prototype = {
    getUtilization: function () {
        var randomNumber = Math.random() * (5 - 0) + 0;
        if (Math.random() > 0.5) {
            if (this.utilization + randomNumber <= 100)
                this.utilization += randomNumber;
        } else {
            if (this.utilization - randomNumber >= 0)
                this.utilization -= randomNumber;
        }
        return this.utilization;
    }
};

var simulatedCPU = new SimulatedCPU();

// Export the module so that it can be required by other modules.
module.exports = simulatedCPU;