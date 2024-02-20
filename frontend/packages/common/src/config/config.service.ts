import { Injectable } from "@plumejs/core";

@Injectable()
export class ConfigService {
  private envVariables: Record<string, unknown>;
  constructor() {
    this.envVariables = { ...(window.__RUNTIME_CONFIG__ || {}) };
  }
  get<T>(key: string): T {
    return this.envVariables[key] as T;
  }
}
