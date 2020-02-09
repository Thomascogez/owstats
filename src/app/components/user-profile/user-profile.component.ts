import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchService } from './../../services/fetch.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  readonly ENDPOINT: string = 'https://ow-api.com/v1/stats';
  userProfile: any;
  fetchError: boolean;

  constructor(private fetchService: FetchService, private route: ActivatedRoute, private spinner: NgxSpinnerService) {
    this.fetchError = false;
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.spinner.show();
      this.fetchService
        .fetchUserProfile(param['userTag'], param['region'], param['platform'])
        .subscribe(
          data => {
            this.userProfile = data ;
            this.fetchError  = false; // reset error message
          },
          err  => {
            this.spinner.hide();
            this.fetchError = true; // display error message if user profile fetch failed
          },
          ()   => (this.spinner.hide()) // when profile fetched ==> hide the loader
          );
    });
  }
}
