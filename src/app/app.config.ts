import { ApplicationConfig,provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { LOCALE_ID } from "@angular/core";

export const appConfig: ApplicationConfig = {
    providers: [
        {provide: LOCALE_ID, useValue: 'es-CL'},
        provideRouter(routes),
        provideBrowserGlobalErrorListeners()
    ]
};