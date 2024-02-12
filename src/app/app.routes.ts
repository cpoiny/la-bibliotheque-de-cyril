import { Routes } from '@angular/router';
import { HomeComponent } from './pages/blog/home/home.component';
import { BooksComponent } from './pages/blog/books/books.component';
import { ErrorComponent } from './pages/error/error.component';
import { PostComponent } from './pages/blog/post/post.component';
import { ConnexionComponent } from './pages/backOffice/connexion/connexion.component';
import { BackofficeAddComponent } from './pages/backOffice/backoffice-add/backoffice-add.component';
import { ConfidentialiteComponent } from './pages/blog/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/blog/cookies/cookies.component';
import { ConditionsComponent } from './pages/blog/conditions/conditions.component';
import { MoviesComponent } from './pages/blog/movies/movies.component';
import { QuotesComponent } from './pages/blog/quotes/quotes.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "la_bibliotheque_de_cyril",
        children: [
            {
                path: "litterature",
                component: BooksComponent
            },
            {
                path: "cinema",
                component: MoviesComponent
            },
            {
                path: "citations",
                component: QuotesComponent
            },
            {
                path: "post/{id}",
                component: PostComponent
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
        path: "admin_la_bibliotheque_de_cyril",
        component: ConnexionComponent,
        children : [
           
            {
                path: "add_post",
                component: BackofficeAddComponent
            },
        ]
    },
    {
        path: "**",
        component: ErrorComponent
    },
];
