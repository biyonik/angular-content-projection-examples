import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import WidgetComponent from './components/widget/widget.component';
import WeatherContentComponent from "./components/weather-content/weather-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WidgetComponent, WeatherContentComponent],
  template: `

  <app-widget>
    <ng-container ngProjectAs="[header]">
      <div class="widget-title">Weather Forecast</div>
      <div class="widget-sub-title">Currently in Vieanna, Austria</div>
    </ng-container>
    <app-weather-content />
  </app-widget>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'content-projection-in-angular';
}
