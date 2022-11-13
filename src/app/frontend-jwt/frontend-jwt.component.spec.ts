import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendJwtComponent } from './frontend-jwt.component';

describe('FrontendJwtComponent', () => {
  let component: FrontendJwtComponent;
  let fixture: ComponentFixture<FrontendJwtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendJwtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendJwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
