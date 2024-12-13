import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes =[
    { //default
        path: '',
        component : HomeComponent,
        title: 'Home page' 
    },
    { //details route
        path: 'details/:id',
        component : DetailsComponent,
        title: 'Details page'
    }
];

export default routeConfig;