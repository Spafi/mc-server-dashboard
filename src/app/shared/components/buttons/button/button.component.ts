import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component( {
                selector: 'app-button',
                template: `
                    <button
                        [class]="computedClasses"
                        [icon]="icon"
                        [label]="label"
                        (click)="onButtonClick($event)"
                        pButton
                        pRipple
                        [type]="type"
                        [loading]="loading"
                    >
                    </button>
                `,
                styles  : []
            } )
export class ButtonComponent implements OnInit {

    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() styleClass: string = '';
    @Input() rounded: boolean = false;
    @Input() outlined: boolean = false;
    @Input() iconOnLeft: boolean = true;
    @Input() loading: boolean = false;
    @Input() disabled: boolean = false;
    @Input() type: string = 'button';

    @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

    computedClasses: string = '';

    ngOnInit(): void {
        this.computeClasses();
    }

    onButtonClick(event: Event): void {
        this.onClick.emit( event );
    }

    private computeClasses(): void {
        this.computedClasses = this.styleClass;
        this.setRoundness();
        this.setOutline();
        this.setIconPosition();
    }

    private setRoundness = () =>
        this.computedClasses = this.rounded
                               ? [ this.computedClasses, 'p-button-rounded' ].join( ' ' )
                               : this.computedClasses;

    private setOutline = () =>
        this.computedClasses = this.outlined
                               ? [ this.computedClasses, 'p-button-outlined' ].join( ' ' )
                               : this.computedClasses;

    private setIconPosition = () =>
        this.computedClasses = this.outlined
                               ? [ this.computedClasses, 'p-button-icon-left' ].join( ' ' )
                               : this.computedClasses;

}
