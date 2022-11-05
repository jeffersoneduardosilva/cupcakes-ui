import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from './report.service';
import { Report } from './report';



@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {

  report = {} as Report;

  ngOnInit(): void {
    this.getReport();
  }

   // Chama o serviço para obter relatorios
   getReport() {
   
    this.reportService.getReport().subscribe((report: Report) => {
      this.report = report;
     });
      
    ;
  }

  constructor(
    private reportService: ReportService
  ) { }

}
