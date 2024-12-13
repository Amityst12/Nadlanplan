import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
      <section class= "listing">
        <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of{{housingLocation.name}}">
        <h2 class ="listing-heading">{{housingLocation.name}}</h2>
        <p class = "listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
        <p class ="listing-drugs">Drugs allowed - {{housingLocation.drugs}}</p>
        <p class ="listing-lolis">Lolis allowed - {{housingLocation.lolis}}</p>
        <p class ="listing-dogs">Dog's name - {{housingLocation.kelev}}</p>
        <a class="learn-more" [routerLink]="['/details', housingLocation.id]">Learn More</a>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;

}
