import { Injectable } from '@angular/core';
import { FlickrImage } from '../models/flickr-image';
import { ListOpts } from '../models/list-opts';

@Injectable({
  providedIn: 'root'
})
export class FlickrSearchService {

  constructor() { }

  search(tags: string, options: ListOpts) {
    return FlickrImage.search(tags, options);
  }

}
