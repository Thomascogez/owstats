import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserGlobalStatsComponent } from './components/user-global-stats/user-global-stats.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppComponent, UserProfileComponent, UserStatsComponent, UserInfoComponent, UserGlobalStatsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, NoopAnimationsModule, NgxSpinnerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
