import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixLogoSmallComponent } from './netflix-logo-small.component';

describe('NetflixLogoSmallComponent', () => {
  let component: NetflixLogoSmallComponent;
  let fixture: ComponentFixture<NetflixLogoSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetflixLogoSmallComponent]
    });
    fixture = TestBed.createComponent(NetflixLogoSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
