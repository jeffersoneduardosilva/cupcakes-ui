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



  ngOnInit(): void {
    this.getItens();
  }

   // Chama o serviço para obter relatorios
   getItens() {
   
  
      
    ;
  }


  constructor(
    private reportService: ReportService
  ) { }

}
