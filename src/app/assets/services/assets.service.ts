import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private httpClient: HttpClient) {}

  createAssets = (asset: any) => {
    return this.httpClient.post('/api/v1/assets/create', asset);
  };
}
