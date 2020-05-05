import LoginComponent from './components/LoginComponent'
import RedirectComponent from "./components/RedirectComponent";
import RegisterComponent from "./components/RegisterComponent";

export const routes = [
    { path: '/logincustom', name: 'logincustom', component: LoginComponent },
    { path: '/redirectComponent', name: 'redirectComponent', component: RedirectComponent },
    { path: '/registerComponent', name: 'registerComponent', component: RegisterComponent },
];


