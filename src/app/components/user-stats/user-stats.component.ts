import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent {

  @Input() gameStats: any;
  @Input() title: string;

  constructor() { }

}
