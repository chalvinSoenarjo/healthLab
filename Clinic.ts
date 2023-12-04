import { Person } from './Person';

export  class Clinic {
    private queue: Person[] = [];
    private name: string;
    private staff: number;
    private blockNum: number;

    constructor(name: string, staff: number, blockNum: number) {
        this.name = name;
        this.staff = staff;
        this.blockNum = blockNum;
    }

    enqueue(person: Person) {
        this.queue.push(person);
        person.isVaccinated = true;
    }

    dequeue(): Person | undefined {
        return this.queue.shift();
    }

    size(): number {
        return this.queue.length;
    }

    getCurrentWaitTime(): number {
        return this.queue.length * 15;
    }

    getName(): string {
        return this.name;
    }

    public getBlockNum(): number {
        return this.blockNum;
    }
}
