import { ApiClient } from './api/api-client';

export class Model {
    private static _api: ApiClient;
    private id: string;

    static setApiClient(arg: ApiClient) {
        this._api = arg;
    }

    static api(): ApiClient {
        return this._api;
    }

    api(): ApiClient {
        return Model._api;
    }

    public getId(): string { return this.id; }
    public withId(arg: string) { this.id = arg; return this; }
}
