class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();  
    }
    getSignature() {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(obj: Key) {
        this.key = obj;
    }

    getKey() {
        return this.key
    }
}

abstract class House {
    public door: 'open' | 'close'; 
    protected key: Key;
    private tenants: Person[] = [];

constructor(obj: Key) {
    this.key = obj;
  }

    comeIn(obj: Person) {
        if (this.door === 'open') {
            this.tenants.push(obj);
            console.log('Person entered the house.');
        } else {
            console.log('The door is closed. Person cannot enter.');
        }
    }
    abstract openDoor(obj: Key):number
}

class MyHouse extends House {
openDoor(obj: Key): number {
    if (obj.getSignature() === this.key.getSignature()) {
        this.door = 'open';
        console.log('The door is opened.');
        return 1; 
    } else {
        console.log('Invalid key. The door remains closed.');
        return 0; 
    }
}
}

// 1
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

// 2

const key2 = new Key();
const house2 = new MyHouse(key);
const person2 = new Person(key);
const result = house.openDoor(person.getKey());

if (result === 1) {
    house.comeIn(person);
}
// 3

const key3 = new Key();
const house3 = new MyHouse(key);
const person3 = new Person(key);
const result2 = house.openDoor(person.getKey());

if (result === 0) {
    house.comeIn(person);
}
//
export {};