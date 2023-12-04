"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinic = void 0;
class Clinic {
    constructor(name, staff, blockNum) {
        this.queue = [];
        this.name = name;
        this.staff = staff;
        this.blockNum = blockNum;
    }
    enqueue(person) {
        this.queue.push(person);
        person.isVaccinated = true;
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }
    getCurrentWaitTime() {
        return this.queue.length * 15;
    }
    getName() {
        return this.name;
    }
    getBlockNum() {
        return this.blockNum;
    }
}
exports.Clinic = Clinic;
