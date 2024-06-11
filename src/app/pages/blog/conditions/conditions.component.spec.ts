import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing';

import { ConditionsComponent } from './conditions.component';

describe('ConditionsComponent', () => {
  let component: ConditionsComponent;
  let fixture: ComponentFixture<ConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionsComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
