import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeAddComponent } from './backoffice-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BackofficeAddComponent', () => {
  let component: BackofficeAddComponent;
  let fixture: ComponentFixture<BackofficeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackofficeAddComponent, RouterTestingModule, HttpClientTestingModule]
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
