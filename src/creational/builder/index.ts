// https://refactoring.guru/design-patterns/builder

interface IHouse {
	base: boolean;
	floor: boolean;
	walls: boolean;
	roof: boolean;
	doors: boolean;
	windows: boolean;
	garage: boolean;
}

interface IHouseDirector {
	builder: IHouseBuilder;
	buildHouse(): IHouse;
	buildBasedHouse(): IHouse;
	buildAdvancedHouse(): IHouse;
}

interface IHouseBuilder {
	house: IHouse;
	getResult(): IHouse;
	buildStep1(): void;
	buildStep2(): void;
	buildStep3(): void;
	buildStep4(): void;
}

enum EnumHouseBuilder {
  BASE,
  ADVANCED,
}

class HouseDirector {
	private readonly builder: IHouseBuilder;

	constructor() {
		this.builder = new HouseBuilder();
  }

	buildHouse(type: EnumHouseBuilder): IHouse {
		switch (type) {
      case EnumHouseBuilder.BASE:
        return this.buildBasedHouse();
      case EnumHouseBuilder.ADVANCED:
        return this.buildAdvancedHouse();
      default:
        throw new Error('Invalid builder type');
    }
	}

	private buildBasedHouse(): IHouse {
		this.builder.buildStep1();
		this.builder.buildStep2();
		this.builder.buildStep3();
		return this.builder.getResult();
	}

	private buildAdvancedHouse(): IHouse {
		this.buildBasedHouse();
		this.builder.buildStep4();;
		return this.builder.getResult();
	}
}

class HouseBuilder implements IHouseBuilder {
	house: IHouse;

	constructor() {
    this.house = new House();
  }

	getResult(): IHouse {
		return this.house;
	}

	buildStep1(): void {
		this.house.base = true;
	}

	buildStep2(): void {
		this.house.floor = true;
    this.house.walls = true;
	}

	buildStep3(): void {
    this.house.roof = true;
    this.house.doors = true;
    this.house.windows = true;
  }

	buildStep4(): void {
    this.house.garage = true;
  }
}

class House implements IHouse {
	base: boolean;
	floor: boolean;
	walls: boolean;
	roof: boolean;
	doors: boolean;
	windows: boolean;
	garage: boolean;

	constructor() {
		this.base = false;
    this.floor = false;
    this.walls = false;
    this.roof = false;
    this.doors = false;
    this.windows = false;
		this.garage = false;
	}
}

const initBuilder = (): void => {
  const houseDirector = new HouseDirector();

  const baseHouse = houseDirector.buildHouse(EnumHouseBuilder.BASE);
  console.log(JSON.stringify(baseHouse));

  const advancedHouse = houseDirector.buildHouse(EnumHouseBuilder.ADVANCED);
  console.log(JSON.stringify(advancedHouse));
}

initBuilder();
// {"base":true,"floor":true,"walls":true,"roof":true,"doors":true,"windows":true,"garage":false}
// {"base":true,"floor":true,"walls":true,"roof":true,"doors":true,"windows":true,"garage":true}
