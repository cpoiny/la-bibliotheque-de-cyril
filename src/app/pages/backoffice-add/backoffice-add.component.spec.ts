import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeAddComponent } from './backoffice-add.component';

describe('BackofficeAddComponent', () => {
  let component: BackofficeAddComponent;
  let fixture: ComponentFixture<BackofficeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackofficeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackofficeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
