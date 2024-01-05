class Key {
    private signature: number = Math.random();  

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey(): Key {
        return this.key
    }
}

abstract class House {
    public door: boolean = false;
    private tenants: Person[] = [];

constructor(protected key: Key) {}

    comeIn(obj: Person): void {
        if (this.door) {
            this.tenants.push(obj);
            console.log('Person entered the house.');
        } else {
            console.log('The door is closed. Person cannot enter.');
        }
    }
    abstract openDoor(obj: Key):void
}

class MyHouse extends House {
openDoor(obj: Key): void {
    if (obj.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
    } else {
        this.door = false;
        console.log('Invalid key. The door remains closed.'); 
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

house.openDoor(person.getKey());

house.comeIn(person);
// 3

const key3 = new Key();

const house3 = new MyHouse(key);
const perso3 = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
//
export {};