import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaseterComponent } from './components/maseter/maseter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaseterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}
