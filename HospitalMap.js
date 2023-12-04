"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalMap = void 0;
const fs_1 = __importDefault(require("fs"));
const Clinic_1 = require("./Clinic");
const MAX_BLOCKS = 10; // Example, set this based on your data
class HospitalMap {
    constructor(filename) {
        this._mapData = this.readData(filename);
        this.initializeCities();
    }
    readData(filename) {
        let rawData = fs_1.default.readFileSync(filename);
        return JSON.parse(rawData.toString());
    }
    initializeCities() {
        this.cities = {};
        for (const city in this._mapData.city) {
            const cityData = this._mapData.city[city];
            this.cities[city] = {
                // Using 'any' for clinicData temporarily
                clinics: cityData.clinics.map((clinicData) => new Clinic_1.Clinic(clinicData.name, clinicData.staff, clinicData.blockNum))
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
                const maxBlockNum = Math.max(...households.map((household) => household.blockNum), ...clinics.map((clinic) => clinic.getBlockNum()));
                for (let i = 0; i <= maxBlockNum; i++) {
                    const householdSymbol = households.some((h) => h.blockNum === i && !h.inhabitants.every((p) => p.isVaccinated))
                        ? "H"
                        : "F";
                    const clinicSymbol = clinics.some((c) => c.getBlockNum() === i) ? "C" : "x";
                    console.log(householdSymbol + "," + clinicSymbol);
                }
            }
            else {
                console.log("No households or clinics found for this city.");
            }
        }
        console.log("---End of Map---");
    }
    registerForShots(currentIntake) {
        for (const city in this.cities) {
            if (this.cities[city].households) {
                this.cities[city].households.forEach((household) => {
                    // Your existing implementation...
                });
            }
        }
    }
    findNearestClinic(cityData, blockNum) {
        let nearestClinic = null;
        let minDistance = Number.MAX_SAFE_INTEGER;
        cityData.clinics.forEach((clinic) => {
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
exports.HospitalMap = HospitalMap;
