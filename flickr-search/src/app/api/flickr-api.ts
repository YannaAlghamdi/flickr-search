import { BaseApi } from './base-api';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ListOpts } from '../models/list-opts';

export class FlickrApi extends BaseApi {
  api: HttpClient;

  constructor(api: HttpClient, config: any) {
    super(config);
    this.api = api;
  }

  // list(options: ListOpts): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.api.get(`${this.configService.get('baseUrl')}/pokemon?offset=${options.getOffset()}&limit=${options.getLimit()}`).subscribe(
  //       (res: any) => resolve(res),
  //       (err: any) => reject(err)
  //     );
  //   });
  // }

  search(tags: Array<string>, options: ListOpts): Promise<any> {
    const params = new HttpParams()
      .set('apiKey', this.configService.get('apiKey'))
      .set('tags', tags.toString())
      .set('sort', options.getSort().toString())
      .set('per_page', options.getPerPage())
      .set('extras', options.getExtras().toString())

    return new Promise((resolve, reject) => {
      this.api.get(
        `${this.configService.get('baseUrl')}`,
        {params}
        ).subscribe(
        (res: any) => resolve(res),
        (err: any) => reject(err)
      );
    });
  }
}
