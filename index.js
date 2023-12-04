"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HospitalMap_1 = require("./HospitalMap");
const ReportMaker_1 = require("./ReportMaker"); // Correct import path
const ComplexReport_1 = require("./ComplexReport");
// Rest of your code...
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const map = new HospitalMap_1.HospitalMap('data.json');
        map.printMap();
        console.log("---End of Map---");
        map.registerForShots(20); // Example currentIntake age
        const report = new ReportMaker_1.ReportMaker(new ComplexReport_1.ComplexReport(map));
        report.printDetails();
        console.log("---End of Report---");
        map.printMap();
        console.log("---End of Map---");
        // Print all data to the terminal
        map.printAllData();
    });
}
main();
