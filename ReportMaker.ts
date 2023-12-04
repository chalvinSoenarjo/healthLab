// Define the IReport interface
export interface IReport {
  printDetails(): void;
}

// Define SimpleReport class
export class SimpleReport implements IReport {
  constructor(private clinicName: string, private peopleInLineup: number) { }

  printDetails() {
    console.log(`${this.clinicName} - People In Lineup: ${this.peopleInLineup}`);
  }
}

// Define ComplexReport class
export class ComplexReport implements IReport {
  constructor(private clinicName: string, private averageWaitTime: number, private peopleInLineup: number) { }

  printDetails() {
    console.log(`Average Wait Time: ${this.averageWaitTime}`);
    console.log(`${this.clinicName} - People In Lineup: ${this.peopleInLineup}`);
  }
}

// Define ReportMaker class
export class ReportMaker {
  constructor(private report: IReport) { }

  printDetails() {
    this.report.printDetails();
  }
}

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