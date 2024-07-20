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
import { BackOfficePostsComponent } from './pages/backOffice/back-office-posts/back-office-posts.component';
import { LayoutComponent } from './pages/backOffice/layout/layout.component';
import { DashboardComponent } from './pages/backOffice/dashboard/dashboard.component';
import { authGuard } from './services/Authentication/auth.guard';
import { SearchComponent } from './components/blog/search/search.component';

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
                path: "recherche/:search",
                component: SearchComponent
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
        path: "admin-lbdc/login",
        component: ConnexionComponent,
    },
    {
        path: "admin-lbdc",
        component: LayoutComponent,
        children: [
            {
                path: "mon-compte",
                component: DashboardComponent,
                canActivate: [authGuard]
            },
            {
                path: "toutes-les-publications",
                component: BackOfficePostsComponent,
                canActivate: [authGuard]
            },
            {
                path: "toutes-les-publications/modifier/:id",
                component: BackofficeAddComponent,
                canActivate: [authGuard]
            },
            {
                path: "toutes-les-publications/ajouter",
                component: BackofficeAddComponent,
                canActivate: [authGuard]
            },
        ]
    },
    {
        path: "**",
        component: ErrorComponent
    },
];
