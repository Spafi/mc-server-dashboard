import { Component, OnInit } from '@angular/core';
import { Image } from 'primeng/image';
import { ImageService } from '~services/Image.service';

@Component( {
                selector   : 'app-galleria',
                templateUrl: './galleria.component.html',
                styleUrls  : [ './galleria.component.scss' ],
                providers  : [ ImageService ]
            } )
export class GalleriaComponent implements OnInit {

    images!: Image[];
    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 5
        },
        {
            breakpoint: '560px',
            numVisible: 3
        }
    ];

    constructor(private readonly imageService: ImageService) {
    }

    ngOnInit() {
        this.imageService.getImages()
            .then( images => this.images = images );
    }

}
