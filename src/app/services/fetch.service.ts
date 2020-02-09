import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  readonly ENDPOINT: string = 'https://ow-api.com/v1/stats';
  userProfile : any;
  constructor(private http: HttpClient) { }

  fetchUserProfile(userTag: string, region: string, platform: string ): Observable<any> {
    return this.http.get(`${this.ENDPOINT}/${ platform }/${ region }/${ userTag }/profile`);
  }
}
