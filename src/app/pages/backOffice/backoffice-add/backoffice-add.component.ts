import { Component } from '@angular/core';
import { HeaderBoComponent } from '../../../components/backOffice/header-bo/header-bo.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonCatBOComponent } from '../../../components/backOffice/button-cat-bo/button-cat-bo.component';

export interface ICategoryButton{
  id: number;
  title: string;
}


@Component({
  selector: 'app-backoffice-add',
  standalone: true,
  imports: [HeaderBoComponent,ButtonComponent, ButtonCatBOComponent],
  templateUrl: './backoffice-add.component.html',
  styleUrl: './backoffice-add.component.css'
})
export class BackofficeAddComponent {


categoriesButton: ICategoryButton[] = [
  {
    id: 1,
    title: "Littérature",
  },
  {
    id: 2,
    title: "Cinéma",
  },
  {
    id: 3,
    title: "Citations",
  }
]

}
