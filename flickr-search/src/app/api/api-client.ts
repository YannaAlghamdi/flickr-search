import { HttpClient } from "@angular/common/http";
import { ConfigService } from "../config.service";
import { FlickrApi } from "./flickr-api";

export class ApiClient {
  private readonly api: HttpClient;
  private readonly flickrApi: FlickrApi;

  constructor(client: HttpClient, configService: ConfigService) {
    this.api = client;
    this.flickrApi = new FlickrApi(this.api, configService);
  }

  flickr(): FlickrApi {
    return this.flickrApi;
  }
}
