export class Cache {
  private static cache = new Map();

  public static get(key: string) {
    const cacheEntry = this.cache.get(key);
    if (!cacheEntry) {
      return null;
    }

    const [value, expiry] = cacheEntry;
    const now = Date.now();
    if (now > expiry) {
      this.cache.delete(key);
      return null;
    }

    return value;
  }

  //key , value and cache time
  public static set(key: string, value: any, ttl: number) {
    if (ttl <= 0) {
      throw new Error('TTL must be a positive number');
    }
    const expiry = Date.now() + ttl * 60000;
    this.cache.set(key, [value, expiry]);
  }
}

export let prerender = true;
