import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  template: `
  <div class="card text-center">
    <div class="card-header">
      {{ header }}
    </div>
    <div class="card-body">
      <!-- [attribute] multi slot transclusion here -->
      <ng-content select="[card-body]"></ng-content>
    </div>
    <div class="card-footer text-muted">
      {{ footer }}
    </div>
  </div>
  `,
  styles: [
  ]
})
export class CardComponent {
  @Input() header: string = 'This is the header';
  @Input() footer: string = 'This is the footer';
}
