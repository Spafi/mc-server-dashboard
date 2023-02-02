import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, take } from 'rxjs';
import { AppMessageService } from '~config/services/app-message.service';
import { ServerService } from '~landing/services/server.service';
import { environment } from '../../environments/environment';

export interface PlayerToMob {
    playerName: string;
    mobName: string;
}

@Component( {
                selector   : 'app-mobs',
                templateUrl: './mobs.component.html',
                styleUrls  : [ './mobs.component.scss' ]
            } )
export class MobsComponent implements OnInit {

    playerToMobList$!: Observable<PlayerToMob[]>;

    avatarSourceUrl = environment.avatarSourceUrl;
    tableColumns = [
        { field: 'playerName', header: 'Player Name' },
        { field: 'mobName', header: 'Mob Name' },
        { field: '', header: 'Delete' }
    ];
    form = new FormGroup( {
                              playerName: new FormControl( '' ),
                              mobName   : new FormControl( '' )
                          } );

    constructor(
        private readonly serverService: ServerService,
        private messageService: AppMessageService
    ) {
    }

    ngOnInit(): void {
        this.playerToMobList$ = this.getPlayerToMobList();
    }

    getPlayerToMobList(): Observable<PlayerToMob[]> {
        return this.serverService.getMobsTeleportList();
    }

    deleteMobTeleport(data: PlayerToMob) {
        this.serverService.deleteMobTeleport( data )
            .pipe( take( 1 ) )
            .subscribe( newList => {
                this.playerToMobList$ = of( newList );
                this.messageService.showSuccess( `${ data.mobName } removed from ${ data.playerName }` );
            } );
    }

    onSubmit() {
        const formData = this.form.value;

        if( formData.playerName == '' || formData.mobName == '' ) {
            return;
        }

        this.serverService.addMobTeleport( formData as PlayerToMob )
            .pipe( take( 1 ) )
            .subscribe( data => {
                this.playerToMobList$ = of( data );
                this.messageService.showSuccess( `${ formData.mobName } registered to ${ formData.playerName }` );
            } );

        this.form.reset();
    }
}
