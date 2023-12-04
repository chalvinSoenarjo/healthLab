import { HospitalMap } from './HospitalMap';

import { IReport } from './IReport'; // Adjust the path as necessary




export class ComplexReport implements IReport {
    private map: HospitalMap;

    constructor(map: HospitalMap) {  // Updated parameter type to HospitalMap
        this.map = map;
    }

    printDetails() {
        for (const city in this.map.cities) {
            console.log(`City: ${city}`);
            this.map.cities[city].clinics.forEach((clinic: any) => {
                console.log(`Clinic: ${clinic.getName()}, Average Wait Time: ${clinic.getCurrentWaitTime()} minutes, People in Lineup: ${clinic.size()}`);
            });
        }
    }
}
