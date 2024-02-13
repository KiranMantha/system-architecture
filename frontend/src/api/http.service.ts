import { Injectable } from '@plumejs/core';
import { ConfigService } from '../config';

@Injectable({
  deps: [ConfigService]
})
export class HttpService {
  private END_POINT: string;
  constructor(configService: ConfigService) {
    this.END_POINT = configService.get<string>('PLUME_API_URL');
  }

  get<R, P = Record<string, unknown>>(api: string, payload?: P): Promise<R> {
    return this.makeRequest(api, 'get', payload);
  }

  private async makeRequest<R, P = Record<string, unknown>>(
    api: string,
    method: 'get' | 'post',
    payload?: P
  ): Promise<R> {
    const options = {
      method
    };
    if (method === 'post') {
      options['body'] = JSON.stringify(payload || {});
    }
    const response = await fetch(`${this.END_POINT}/${api}`, options);
    return await response.json();
  }
}
