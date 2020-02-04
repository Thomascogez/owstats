import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private routeSub: any ;
  private httpSub: any  ;
  readonly ENDPOINT: string = 'https://ow-api.com/v1/stats';
  userProfile: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(param => {
      // sub to the http request
      this.httpSub = this.http
        .get(
          `${this.ENDPOINT}/${param['platform']}/${param['region']}/${param['userTag'] }/profile`)
            .subscribe(data => {
              this.userProfile = data;
              console.log(data);
            });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.httpSub.unsubscribe() ;
  }
}
