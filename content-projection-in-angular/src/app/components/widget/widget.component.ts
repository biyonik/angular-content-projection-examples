import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-widget',
    template: `
        <div class="widget-header">
            <ng-content select="[header]"/>
        </div>
        <div class="widget-content">
            <ng-content>
                <p class="no-content">No content</p>
            </ng-content>
        </div>
    `,
    styleUrls: ['./widget.component.scss']
})
export default class WidgetComponent {

}