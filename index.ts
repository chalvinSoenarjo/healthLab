import { HospitalMap } from './HospitalMap'; 
import { ReportMaker } from './ReportMaker'; // Correct import path
import { ComplexReport } from './ComplexReport';

// Rest of your code...


async function main() {
    const map = new HospitalMap('data.json');
    map.printMap();
    console.log("---End of Map---");

    map.registerForShots(20); // Example currentIntake age

    const report = new ReportMaker(new ComplexReport(map));
    report.printDetails();

    console.log("---End of Report---");
    map.printMap();
    console.log("---End of Map---");

     // Print all data to the terminal
     map.printAllData();
}

main();
