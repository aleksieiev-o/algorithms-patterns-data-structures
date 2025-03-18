// https://refactoring.guru/design-patterns/factory-method

interface ICreator {
	createProduct(): IProduct;
}

interface IProduct {
	commonProperty: string;
	doSomething(): void;
}

interface IProductPayload {
  commonProperty: string;
}

class ConcreteCreatorA implements ICreator {
	public createProduct(): IProduct {
    return new ConcreteProductA({commonProperty: 'ConcreteProductA common field value'});
  }
}

class ConcreteProductA implements IProduct {
	commonProperty: string;

	constructor(payload: IProductPayload) {
		this.commonProperty = payload.commonProperty;
	}

	public doSomething(): void {
    console.log('ConcreteProductA is doing something.', `Common property is: ${this.commonProperty}`);
  }
}

class ConcreteCreatorB implements ICreator {
	public createProduct(): IProduct {
    return new ConcreteProductB({commonProperty: 'ConcreteProductB common field value'});
  }
}

class ConcreteProductB implements IProduct {
	commonProperty: string;

	constructor(payload: IProductPayload) {
		this.commonProperty = payload.commonProperty;
	}

	public doSomething(): void {
    console.log('ConcreteProductB is doing something.', `Common property is: ${this.commonProperty}`);
  }
}

const initFactory = (): void => {
	const factoryA = new ConcreteCreatorA();
  const productA = factoryA.createProduct();
  productA.doSomething();

  const factoryB = new ConcreteCreatorB();
  const productB = factoryB.createProduct();
  productB.doSomething();
}

initFactory();
// ConcreteProductA is doing something. Common property is: ConcreteProductA common field value
// ConcreteProductB is doing something. Common property is: ConcreteProductB common field value
