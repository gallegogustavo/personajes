import { Injectable } from '@angular/core';

@Injectable()

export class Configuration {
    public Server = 'https://personajes-a64a6.firebaseio.com/';
    public ApiUrl = 'personajes/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
