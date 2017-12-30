import { Route } from "@angular/router/src/config";
import { PostsContainerComponent } from "./posts-container/posts-container.component";
import { PostpageComponent } from "./postpage/postpage.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Route[] =[
    {path: 'posts', 
    children: [
        {path: '', component: PostsContainerComponent},
        {path: ':id', component: PostpageComponent},
      ]
    },
    {
        path: 'users',
        children: [
        {path: ':username', component: UserProfileComponent},
      ]
    },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full'}
];