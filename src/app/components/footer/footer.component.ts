import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { ConfidentialiteComponent } from '../../pages/confidentialite/confidentialite.component';
import { CookiesComponent } from '../../pages/cookies/cookies.component';
import { ConditionsComponent } from '../../pages/conditions/conditions.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ButtonComponent, ConfidentialiteComponent, CookiesComponent, ConditionsComponent, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  title = "Envoyer";

 
 ngOnInit() {

 }
 
 
 
  onSubmit(){

 }
  
  
}
