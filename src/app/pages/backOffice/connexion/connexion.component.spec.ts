import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionComponent } from './connexion.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ConnexionComponent', () => {
  let component: ConnexionComponent;
  let fixture: ComponentFixture<ConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionComponent, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
