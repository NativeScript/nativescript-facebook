import { Injectable } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class NavigationService {

    constructor(private routerExtensions: RouterExtensions) { }

    go(route: Array<string>, name?: string) {

        this
            .routerExtensions
            .navigate(route, {
                clearHistory: true,
                animated: true,
                transition: {
                    name: name ? name : "slide",
                    duration: 200,
                    curve: "linear"
                }
            });

    }
}