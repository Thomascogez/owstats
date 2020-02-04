import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGlobalStatsComponent } from './user-global-stats.component';

describe('UserGlobalStatsComponent', () => {
  let component: UserGlobalStatsComponent;
  let fixture: ComponentFixture<UserGlobalStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGlobalStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGlobalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
