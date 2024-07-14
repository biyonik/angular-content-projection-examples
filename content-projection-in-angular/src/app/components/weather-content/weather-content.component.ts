import { Component, input, InputSignal } from "@angular/core";

@Component({
    standalone: true,
    selector: "app-weather-content",
    template: `
        <div class="sky-condition">☀️</div>
        <div class="temperature">{{temperature()}}°C</div>
    `,
    styles: [``]
})
export default class WeatherContentComponent {
    temperature: InputSignal<Number> = input<Number>(0)
}