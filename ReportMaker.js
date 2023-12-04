"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportMaker = exports.ComplexReport = exports.SimpleReport = void 0;
// Define SimpleReport class
class SimpleReport {
    constructor(clinicName, peopleInLineup) {
        this.clinicName = clinicName;
        this.peopleInLineup = peopleInLineup;
    }
    printDetails() {
        console.log(`${this.clinicName} - People In Lineup: ${this.peopleInLineup}`);
    }
}
exports.SimpleReport = SimpleReport;
// Define ComplexReport class
class ComplexReport {
    constructor(clinicName, averageWaitTime, peopleInLineup) {
        this.clinicName = clinicName;
        this.averageWaitTime = averageWaitTime;
        this.peopleInLineup = peopleInLineup;
    }
    printDetails() {
        console.log(`Average Wait Time: ${this.averageWaitTime}`);
        console.log(`${this.clinicName} - People In Lineup: ${this.peopleInLineup}`);
    }
}
exports.ComplexReport = ComplexReport;
// Define ReportMaker class
class ReportMaker {
    constructor(report) {
        this.report = report;
    }
    printDetails() {
        this.report.printDetails();
    }
}
exports.ReportMaker = ReportMaker;
// Example usage:
const simpleReport = new SimpleReport("Clinic A", 10);
const complexReport = new ComplexReport("Clinic B", 30, 15);
const simpleReportMaker = new ReportMaker(simpleReport);
simpleReportMaker.printDetails(); // Output: Clinic A - People In Lineup: 10
const complexReportMaker = new ReportMaker(complexReport);
complexReportMaker.printDetails();
// Output:
// Average Wait Time: 30
// Clinic B - People In Lineup: 15
