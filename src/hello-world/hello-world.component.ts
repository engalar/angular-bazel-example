import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {msg} from '../lib/file';
import {CdkOverlayOrigin, Overlay, OverlayRef} from "@angular/cdk/overlay";
import {CdkPortal} from "@angular/cdk/portal";

@Component({
    selector: 'hello-world-app',
    templateUrl: 'hello-world.component.html',
    styleUrls: ['./hello-world.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HelloWorldComponent implements AfterViewInit {
    overlayRef: OverlayRef;
    @ViewChild(CdkOverlayOrigin) origin: CdkOverlayOrigin;

    @ViewChild(CdkPortal) cdkPortal: CdkPortal;

    name: string = msg;

    constructor(private _overlay: Overlay) {
    }

    ngAfterViewInit() {
        this.overlayRef = this._overlay.create({
            hasBackdrop: true,
            positionStrategy: this._overlay.position().flexibleConnectedTo(this.origin.elementRef).withPositions([{
                overlayX: 'start',
                overlayY: 'top',
                originX: 'start',
                originY: 'bottom',
            }]).withFlexibleDimensions(true)
                .withGrowAfterOpen(true)
            ,
        });
        this.overlayRef.backdropClick().subscribe(value => {
            this.overlayRef.detach();
        });
        this.overlayRef.attach(this.cdkPortal);
    }

    ope() {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        } else {
            this.overlayRef.attach(this.cdkPortal);
        }
    }
}
