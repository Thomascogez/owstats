import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly regions: Array<string> = ['eu', 'us', 'asia'];
  readonly platforms: Array<string> = ['pc', 'ps4', 'xbox'];
  tag: string;
  selectedRegion: string;
  selectedPlatform: string;

  constructor(private router: Router) {
    this.tag = '';
    this.selectedRegion = this.regions[0];
    this.selectedPlatform = this.platforms[0];
  }

  /**
   * Check the validity of the battletag (not emplty and contain at least one #)
   */
  isTagValid() {
    return this.tag.trim() !== '' && this.tag.includes('#');
  }

  searchPlayer() {
    if(this.isTagValid()) {
      this.router.navigate(['/profile', this.selectedRegion, this.selectedPlatform, this.tag.replace('#', '-')]);
    }
  }
}
