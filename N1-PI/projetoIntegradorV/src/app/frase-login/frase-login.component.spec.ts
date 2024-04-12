import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseLoginComponent } from './frase-login.component';

describe('FraseLoginComponent', () => {
  let component: FraseLoginComponent;
  let fixture: ComponentFixture<FraseLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FraseLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FraseLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
