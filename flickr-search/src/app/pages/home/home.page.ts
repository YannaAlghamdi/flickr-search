import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/app/config.service';
import { FlickrImage } from 'src/app/models/flickr-image';
import { ListOpts } from 'src/app/models/list-opts';
import { FlickrSearchService } from 'src/app/services/flickr-search.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private form: FormGroup;
  private results: Array<FlickrImage>;
  private sortOptions: Array<string>;

  constructor(
    private configService: ConfigService,
    private formBuilder: FormBuilder,
    private searchService: FlickrSearchService,
    private router: Router,
    private toastController: ToastController
    ) {}


  ngOnInit() {
    this.form = this.formBuilder.group({
      tags: ['', Validators.required],
    });
    this.results = new Array<FlickrImage>();
    this.sortOptions = ['No. of Views', 'Date Taken', 'Date Uploaded'];
  }

  search(tag: string) {
    let opts = new ListOpts()
      .withExtras(this.configService.get('extras'))
      .withPerPage(1)
      .withSort(this.configService.get('default_sorting'))

    let tags = this.form.get('tags').value;

    this.searchService.search(tags, opts).then((data:Array<FlickrImage>) => {
      data.forEach(img => {
        this.results.push(img);
      });
    }).catch(error => {
      this.showError(error);
    })

    this.form.reset();
  }

  displayTags(query: string) {
      return query.split(',');
  }

  convertDate(date: number, isUnix: boolean) {
    if(isUnix)
      return moment.unix(date).format("MM-DD-YYYY");
    else {
      return moment(date).format("MM-DD-YYYY");
    }
  }

  sort(option: string) {
    switch(option) {
      case 'No. of Views':
        this.results.sort((a, b) => b.getViews() - a.getViews())
        return this.results;
      case 'Date Uploaded':
        this.results.sort((a, b) => b.getDateUploaded() - a.getDateUploaded())
        return this.results;
      case 'Date Taken':
        this.results.sort((a, b) => moment(b.getDateTaken()).valueOf() - moment(a.getDateTaken()).valueOf())
        return this.results;
    }
  }

  async showError(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger',
    });
  }

  showAllPhotos(tag: string) {
    this.router.navigate([`all-photos/${tag}`]);
  }


}
