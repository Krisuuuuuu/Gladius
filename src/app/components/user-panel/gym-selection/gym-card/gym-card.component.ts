import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IGym } from 'src/app/model/gym-selection/IGym';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.scss']
})
export class GymCardComponent implements OnInit{
  @Input() gym: IGym;
  thumbnail: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + this.gym.thumbnail);
  }
}
