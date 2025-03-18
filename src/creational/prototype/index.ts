// https://refactoring.guru/design-patterns/prototype

interface IPrototype {
	clone(): IPrototype;
}

class ConcretePrototype implements IPrototype {
	field1: string;

	constructor(field1: string) {
    this.field1 = field1;
  }
	public clone(): IPrototype {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
	}
}

class SubConcretePrototype extends ConcretePrototype implements IPrototype {
	field2: string;

	constructor(field1: string, field2: string) {
    super(field1);
    this.field2 = field2;
  }
}

const initPrototype = () => {
	const prototype = new ConcretePrototype('Initial field value');
	const subPrototype = new SubConcretePrototype('Initial field value', 'Sub-initial field value');

	console.log('Prototype:', prototype.field1);
	console.log('Sub prototype:', subPrototype.field2);
}

initPrototype();
// Prototype: Initial field value
// Sub prototype: Sub-initial field value
