import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-global-stats',
  templateUrl: './user-global-stats.component.html',
  styleUrls: ['./user-global-stats.component.scss']
})
export class UserGlobalStatsComponent{
  @Input() gamesWon: number;
  @Input() endorsement: number;
  @Input() prestige: number;
  @Input() level: number;

  constructor() { }

}
