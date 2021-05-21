import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/progress-spinner/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GymSolutions-Web-Client';
  loading: boolean;

  constructor(private loaderService: LoaderService){}

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }
}
