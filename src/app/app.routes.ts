import { Routes } from '@angular/router';
import { HomeComponent } from './pages/blog/home/home.component';
import { ErrorComponent } from './pages/pageNotFound/error.component';
import { PostComponent } from './pages/blog/post/post.component';
import { ConnexionComponent } from './pages/backOffice/connexion/connexion.component';
import { BackofficeAddComponent } from './pages/backOffice/backoffice-add/backoffice-add.component';
import { ConfidentialiteComponent } from './pages/blog/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/blog/cookies/cookies.component';
import { ConditionsComponent } from './pages/blog/conditions/conditions.component';
import { PostByTypeComponent } from './pages/blog/postByTpe/postByType.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "la_bibliotheque_de_cyril",
        children: [
            {
                path: "publications/:type",
                component: PostByTypeComponent
            },
            {
                path: "publications/:type/:id",
                component: PostComponent,
            },
            {
                path: "page_de_confidentialite",
                component: ConfidentialiteComponent
            },
            {
                path: "cookies",
                component: CookiesComponent
            },
            {
                path: "conditions",
                component: ConditionsComponent
            }
        ]
    },
    {
        path: "admin-lbdc/connexion",
        component: ConnexionComponent,
    },
    {
        path: "admin-lbdc/posts",
        children: [
            {
                path: "all",
                component: PostByTypeComponent
                // Créer une page pour afficher tous les posts
            },
            {
                path: "modifier/:id",
                component: BackofficeAddComponent
            },
            {
                path: "ajouter",
                component: BackofficeAddComponent
            },
        ]
    },
    {
        path: "**",
        component: ErrorComponent
    },
];
