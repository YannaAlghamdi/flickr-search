export class ListOpts {
  sort: string;
  extras: Array<string>;
  per_page: number;

  public getSort(): string { return this.sort; }
  public withSort(arg: string) { this.sort = arg; return this; }

  public getExtras(): Array<string> { return this.extras; }
  public withExtras(arg: Array<string>) { this.extras = arg; return this; }

  public getPerPage(): number { return this.per_page; }
  public withPerPage(arg: number) { this.per_page = arg; return this; }

}
