import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  template: `
  <!-- [attribute] multi slot transclusion here -->
  <div class="card text-center">
    <div class="card-header">
      <ng-content select="[card-header]"></ng-content>
    </div>
    <div class="card-body">
      <ng-content select="[card-body]"></ng-content>
    </div>
    <div class="card-footer text-muted">
      <ng-content select="[card-footer]"></ng-content>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class CardComponent {}
