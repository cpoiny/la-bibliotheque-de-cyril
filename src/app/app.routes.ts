import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ErrorComponent } from './pages/error/error.component';
import { PostComponent } from './pages/post/post.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { BackofficeAddComponent } from './pages/backoffice-add/backoffice-add.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "category",
        component: CategoryComponent
    },
    {
        path: "post/{id}",
        component: PostComponent
    },
    {
        path: "administration_du_blog/connexion",
        component: ConnexionComponent
    },
    {
        path: "administration_du_blog/add_post",
        component: BackofficeAddComponent
    },
    {
        path: "**",
        component: ErrorComponent
    },
];
