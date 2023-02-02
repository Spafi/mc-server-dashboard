import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from 'primeng/image';
import { catchError, map, Observable } from 'rxjs';
import { httpErrorHandler } from '~app/config/functions/http-error-handler.function';


export interface ImageResponse {
    data: Image[];
}

@Injectable()
export class ImageService {

    constructor(private http: HttpClient) {
    }

    getImages(): Observable<Image[]> {
        return this.http.get<ImageResponse>( 'assets/images/showcase/images-data.json' )
                   .pipe(
                       map( res => res.data ),
                       catchError( err => httpErrorHandler( err ) )
                   );
    }
}
