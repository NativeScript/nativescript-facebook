export const routes = [
    {
        path: "home",
        loadChildren: "./pages/home/home.module#HomeModule"
    },
    {
        path: "login",
        loadChildren: "./pages/login/login.module#LoginModule"
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    }

];