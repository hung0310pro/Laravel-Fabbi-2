import LoginComponent from './components/LoginComponent'
import RedirectComponent from "./components/RedirectComponent";
import RegisterComponent from "./components/RegisterComponent";
import NotificationsComponent from "./components/NotificationsComponent";
import ViewNotification from "./components/ViewNotification";
import ListNotificationsComponent from "./components/ListNotificationsComponent";
import ViewDetailComponent from "./components/ViewDetailComponent";

export const routes = [
    { path: '/logincustom', name: 'logincustom', component: LoginComponent },
    { path: '/redirectComponent', name: 'redirectComponent', component: RedirectComponent },
    { path: '/registerComponent', name: 'registerComponent', component: RegisterComponent },
    { path: '/notificationsComponent', name: 'notificationsComponent', component: NotificationsComponent },
    { path: '/viewNotification/:id', name: 'viewNotification', component: ViewNotification },
    { path: '/listNotificationsComponent', name: 'listNotificationsComponent', component: ListNotificationsComponent },
    { path: '/viewDetailComponent/:id', name: 'viewDetailComponent', component: ViewDetailComponent },
];




