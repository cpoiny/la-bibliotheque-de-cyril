import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCatBOComponent } from './button-cat-bo.component';

describe('ButtonCatBOComponent', () => {
  let component: ButtonCatBOComponent;
  let fixture: ComponentFixture<ButtonCatBOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCatBOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCatBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
