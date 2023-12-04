import fs from 'fs';
import { Clinic } from './Clinic';
import { Household } from './Household';

interface CityData {
    // Define the structure of city data
    clinics: Clinic[];
    // Add other properties if needed...
}


const MAX_BLOCKS = 10; // Example, set this based on your data

export class HospitalMap {
  

    private _mapData;
    public cities: any; // Define a more specific type

    constructor(filename: string) {
        this._mapData = this.readData(filename);
        this.initializeCities();
    }

    private readData(filename: string) {
        let rawData = fs.readFileSync(filename);
        return JSON.parse(rawData.toString());
    }

    private initializeCities() {
        this.cities = {};
        for (const city in this._mapData.city) {
            const cityData = this._mapData.city[city];
            this.cities[city] = {
                // Using 'any' for clinicData temporarily
                clinics: cityData.clinics.map((clinicData: any) => new Clinic(clinicData.name, clinicData.staff, clinicData.blockNum))
            };
        }
    }

    printMap() {
        console.log("---Map---");
        for (const city in this._mapData) {
            console.log(city);
    
            // Check if households and clinics exist
            if (this._mapData[city] && this._mapData[city].households && this._mapData[city].clinics) {
                const households = this._mapData[city].households;
                const clinics = this._mapData[city].clinics;
    
                const maxBlockNum = Math.max(
                    ...households.map((household: Household) => household.blockNum),
                    ...clinics.map((clinic: Clinic) => clinic.getBlockNum())
                );
    
                for (let i = 0; i <= maxBlockNum; i++) {
                    const householdSymbol = households.some((h: Household) => h.blockNum === i && !h.inhabitants.every((p) => p.isVaccinated))
                        ? "H"
                        : "F";
    
                    const clinicSymbol = clinics.some((c: Clinic) => c.getBlockNum() === i) ? "C" : "x";
    
                    console.log(householdSymbol + "," + clinicSymbol);
                }
            } else {
                console.log("No households or clinics found for this city.");
            }
        }
        console.log("---End of Map---");
    }
    
    
    

    public registerForShots(currentIntake: number) {
        for (const city in this.cities) {
            if (this.cities[city].households) {
                this.cities[city].households.forEach((household: Household) => {
                    // Your existing implementation...
                });
            }
        }
    }
    



    private findNearestClinic(cityData: CityData, blockNum: number): Clinic | null {
        let nearestClinic: Clinic | null = null;
        let minDistance: number = Number.MAX_SAFE_INTEGER;

        cityData.clinics.forEach((clinic: any) => { 
            const distance = Math.abs(clinic.blockNum - blockNum);
            if (distance < minDistance) {
                minDistance = distance;
                nearestClinic = clinic;
            }
        });

        return nearestClinic;
    }

    
    printAllData() {
        console.log("Printing all data:");
        console.log(this._mapData); // Debugging: Print _mapData to see its structure
    
        // Loop through cities
        for (const city in this._mapData.city) {
            console.log(`City: ${city}`);
    
            // Check if households exist in the current city
            if (this._mapData.city[city].households) {
                // Loop through households
                for (const household of this._mapData.city[city].households) {
                    console.log(`Household Block: ${household.blockNum}`);
                    // Print inhabitants of the household
                    for (const inhabitant of household.inhabitants) {
                        console.log(`PHN: ${inhabitant.phn}, Name: ${inhabitant.fullName}, Age: ${inhabitant.age}, Vaccinated: ${inhabitant.isVaccinated}`);
                    }
                }
            }
    
            // Check if clinics exist in the current city
            if (this._mapData.city[city].clinics) {
                // Loop through clinics
                for (const clinic of this._mapData.city[city].clinics) {
                    console.log(`Clinic: ${clinic.name}, Block: ${clinic.blockNum}, Staff: ${clinic.staff}`);
                }
            }
        }
    }
    
    

}
