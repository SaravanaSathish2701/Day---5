// write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor() {
      this.basePrice = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      const totalPrice = this.basePrice + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 4.0;;
  const timeInMinutes = 8; 
  
  const estimatedCost = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated UberPrice: ₹${estimatedCost}`);