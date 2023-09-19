import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {
  clientIds: string[] = [];
  randomClientId: string = ''; 
  currentDateTime: string="";


  templates: any[] = [];
  selectedTemplate: string = ''; // Property to store the selected template
  selectedFrequencyType: string = ''; 
  frequencyTypes: any[] = [];
  DataRecipientInfo: string = ''; // Property to store DataRecipientInfo


  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private http: HttpClient
  ) { }
  updateCurrentDateTime() {
    const currentDate = new Date();
    this.currentDateTime = currentDate.toLocaleString(); // Format the date and time as needed
  }
  
  ngOnInit(): void {
    
    const breadcrumbLabel = this.route.snapshot.data['breadcrumb'];
    this.fetchClientIds();
    this.breadcrumbService.updateBreadcrumbs([
      { label: breadcrumbLabel, url: this.route.snapshot.url.join('/') },
    ]);
    this.http.get<any[]>('https://lr7rg.wiremockapi.cloud/template').subscribe((data) => {
      this.templates = data;
    });
    this.http.get<any[]>('https://lr7rg.wiremockapi.cloud/frequency').subscribe((data) => {
    this.frequencyTypes = data;

    this.updateCurrentDateTime();

    this.http.get<any[]>('https://lr7rg.wiremockapi.cloud/dataRecipient')
      .subscribe(data => {
        // Assuming the API response is an array of objects, you can choose the first item or any specific one you want to display
        if (data.length > 0) {
          this.DataRecipientInfo = data[0].DataRecipientInfo;
        }
      });
});

  }

  fetchClientIds() {
    // Replace 'your-api-url' with the actual URL of your API
    this.http.get<any[]>('https://lr7rg.wiremockapi.cloud/client')
      .subscribe(data => {
        this.clientIds = data.map(item => item.id);
        this.setRandomClientId();
      });
  }

  setRandomClientId() {
    const randomIndex = Math.floor(Math.random() * this.clientIds.length);
    this.randomClientId = this.clientIds[randomIndex];
  }

   
}
