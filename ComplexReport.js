"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexReport = void 0;
class ComplexReport {
    constructor(map) {
        this.map = map;
    }
    printDetails() {
        for (const city in this.map.cities) {
            console.log(`City: ${city}`);
            this.map.cities[city].clinics.forEach((clinic) => {
                console.log(`Clinic: ${clinic.getName()}, Average Wait Time: ${clinic.getCurrentWaitTime()} minutes, People in Lineup: ${clinic.size()}`);
            });
        }
    }
}
exports.ComplexReport = ComplexReport;
