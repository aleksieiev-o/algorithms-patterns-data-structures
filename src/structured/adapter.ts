class Target implements ITarget {
  targetRequest(): string {
    return 'Target output string';
  }
}

class Adaptee implements IAdaptee {
  adapteeRequest(): string {
    return 'Adaptee output string';
  }
}

class Adapter implements IAdapter {
  private readonly adaptee: IAdaptee;

  constructor(adaptee: IAdaptee) {
    this.adaptee = adaptee;
  }

  targetRequest(): string {
    return `Output from Adapter --- ${this.adaptee.adapteeRequest()}`;
  }
}

function clientCode(target: ITarget): void {
  console.log(target.targetRequest());
}

const target: ITarget = new Target();
const adaptee: IAdaptee = new Adaptee();
const adapter: Adapter = new Adapter(adaptee);

clientCode(adapter);

interface ITarget {
  targetRequest: () => string;
}

interface IAdaptee {
  adapteeRequest: () => string;
}

interface IAdapter extends ITarget {}
