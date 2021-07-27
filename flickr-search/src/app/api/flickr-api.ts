import { BaseApi } from './base-api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ListOpts } from '../models/list-opts';
import { FlickrImage } from '../models/flickr-image';

export class FlickrApi extends BaseApi {
  api: HttpClient;

  constructor(api: HttpClient, config: any) {
    super(config);
    this.api = api;
  }

  search(tags: string, options: ListOpts): Promise<any> {
    var params = new HttpParams();


    if(options.getPerPage()) {
      params = params
        .set('api_key', this.configService.get('apiKey'))
        .set('tags', tags)
        .set('sort', options.getSort())
        .set('extras', options.getExtras())
        .set('format', 'json')
        .set('nojsoncallback', 1)
        .set('per_page', options.getPerPage())
    }
    else {
      params = params
        .set('api_key', this.configService.get('apiKey'))
        .set('tags', tags)
        .set('sort', options.getSort())
        .set('extras', options.getExtras())
        .set('format', 'json')
        .set('nojsoncallback', 1)
    }

    return new Promise((resolve, reject) => {
      this.api.get(
        `${this.configService.get('baseUrl')}`,
        {params}
        ).subscribe(
        (res: any) => resolve(this.deserialize(res, tags)),
        (err: any) => reject(err)
      );
    });
  }

  deserialize(result: any, tags: string): Array<FlickrImage> {
    let images = new Array<FlickrImage>();

    result.photos.photo.forEach(img => {
      images.push(new FlickrImage()
        .withId(img.id)
        .withOwnerName(img.ownername)
        .withDateTaken(img.datetaken)
        .withDateUploaded(img.dateupload)
        .withSearchTag(tags)
        .withUrl(img.url_q)
        .withViews(img.views))
    });

    return images;
  }
}
