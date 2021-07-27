import { Model } from '../model';
import { ListOpts } from './list-opts';

export class FlickrImage extends Model {
  searchTag: string;
  url: string;
  ownerName: string;
  dateUploaded: number;
  dateTaken: number;
  views: number;

  public getSearchTag(): string { return this.searchTag; }
  public withSearchTag(arg: string) { this.searchTag = arg; return this; }

  public getUrl(): string { return this.url; }
  public withUrl(arg: string) { this.url = arg; return this; }

  public getOwnerName(): string { return this.ownerName; }
  public withOwnerName(arg: string) { this.ownerName = arg; return this; }

  public getDateUploaded(): number { return this.dateUploaded; }
  public withDateUploaded(arg: number) { this.dateUploaded = arg; return this; }


  public getDateTaken(): number { return this.dateTaken; }
  public withDateTaken(arg: number) { this.dateTaken = arg; return this; }

  public getViews(): number { return this.views; }
  public withViews(arg: number) { this.views = arg; return this; }

  public static search(tags: string, opts: ListOpts) {
    return this.api().flickr().search(tags, opts);
  }

}
