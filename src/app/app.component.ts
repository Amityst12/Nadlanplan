
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-root',
  template: `
      <main>
      <header class="brand-name">
        <img class="KAP" src="/assets/kaplanPic.png" alt="logo" aria-hidden="true"/>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]
})
export class AppComponent {
  title = 'homes';
}

 