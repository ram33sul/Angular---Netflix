import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixLogoBigComponent } from './netflix-logo-big.component';

describe('NetflixLogoBigComponent', () => {
  let component: NetflixLogoBigComponent;
  let fixture: ComponentFixture<NetflixLogoBigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetflixLogoBigComponent]
    });
    fixture = TestBed.createComponent(NetflixLogoBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
