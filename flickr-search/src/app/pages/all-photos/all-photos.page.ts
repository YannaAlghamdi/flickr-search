import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { FlickrImage } from 'src/app/models/flickr-image';
import { ListOpts } from 'src/app/models/list-opts';
import { FlickrSearchService } from 'src/app/services/flickr-search.service';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.page.html',
  styleUrls: ['./all-photos.page.scss'],
})
export class AllPhotosPage implements OnInit {
  private tag: string;
  private results: Array<FlickrImage>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: FlickrSearchService,
    private configService: ConfigService) { }

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag');;
    this.results = new Array<FlickrImage>();
    this.search(this.tag);
  }

  search(tag: string) {
    let opts = new ListOpts()
      .withExtras(this.configService.get('extras'))
      .withSort(this.configService.get('default_sorting'))

    this.searchService.search(this.tag, opts).then((data:Array<FlickrImage>) => {
      this.results = data;
    })
  }
}
