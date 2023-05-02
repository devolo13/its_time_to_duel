class Ninja {
  constructor(cost, power, resilience) {
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    if (!(target instanceof Ninja)) {
      console.log('error, target must be a ninja');
    } else {
      target.resilience -= this.power;
      return this;
    }
  }
}

class Effect {
  constructor(cost, text, stat, magnitude) {
    this.cost = cost;
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  cast(target) {
    if (!(target instanceof Ninja)) {
      console.log('error, target must be a ninja');
    } else {
      if (this.stat == 'resilience') {
        target.resilience += this.magnitude;
        return target;
      } else if (this.stat == 'power') {
        target.power += this.magnitude;
        return target;
      }
    }
  }
}

const redBeltNinja = new Ninja(3, 3, 4);
const hardAlgorithm = new Effect(2, "increase target's resilience by 3", 'resilience', 3);
hardAlgorithm.cast(redBeltNinja);
const blackBeltNinja = new Ninja(4, 5, 4);
const unhandledPromiseRejection = new Effect(1, "reduce target's resilience by 2", 'resilience', -2);
unhandledPromiseRejection.cast(redBeltNinja);
const pairProgramming = new Effect( 2, "increase target's power by 2", 'power', 2);
pairProgramming.cast(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
console.log(redBeltNinja);
console.log(blackBeltNinja);
