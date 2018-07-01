import {NgModule} from '@angular/core';

import {HelloWorldComponent} from './hello-world.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {PortalModule} from "@angular/cdk/portal";

@NgModule({
    imports: [
        OverlayModule,
        PortalModule,
    ],
    declarations: [HelloWorldComponent],
    exports: [HelloWorldComponent],
})
export class HelloWorldModule {
}