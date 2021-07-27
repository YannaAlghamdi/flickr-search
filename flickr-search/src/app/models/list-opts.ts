export class ListOpts {
  sort: string;
  extras: string;
  per_page: number;

  public getSort(): string { return this.sort; }
  public withSort(arg: string) { this.sort = arg; return this; }

  public getExtras(): string { return this.extras; }
  public withExtras(arg: string) { this.extras = arg; return this; }

  public getPerPage(): number { return this.per_page; }
  public withPerPage(arg: number) { this.per_page = arg; return this; }

}
