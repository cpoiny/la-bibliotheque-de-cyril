import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ErrorComponent } from './pages/error/error.component';
import { PostComponent } from './pages/post/post.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { BackofficeAddComponent } from './pages/backoffice-add/backoffice-add.component';
import { ConfidentialiteComponent } from './pages/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';

export const routes: Routes = [
    {
        path: "la_bibliotheque_de_cyril",
        component: HomeComponent
    },
    {
        path: "la_bibliotheque_de_cyril/category",
        component: CategoryComponent
    },
    {
        path: "la_bibliotheque_de_cyril/post/{id}",
        component: PostComponent
    },
    {
        path: "la_bibliotheque_de_cyril/page_de_confidentialite",
        component: ConfidentialiteComponent
    },
    {
        path: "la_bibliotheque_de_cyril/cookies",
        component: CookiesComponent
    },
    {
        path: "la_bibliotheque_de_cyril/conditions",
        component: ConditionsComponent
    },
    {
        path: "la_bibliotheque_de_cyril/administration_du_blog/connexion",
        component: ConnexionComponent
    },
    {
        path: "la_bibliotheque_de_cyril/administration_du_blog/add_post",
        component: BackofficeAddComponent
    },
    {
        path: "**",
        component: ErrorComponent
    },
];
