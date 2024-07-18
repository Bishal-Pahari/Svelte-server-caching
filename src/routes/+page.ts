import { Cache } from '../server/cache';

export const load = async () => {
  try {
    const cacheKey = 'posts';
    let data = Cache.get(cacheKey);

    if (!data) {
      console.log('Cache miss');
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      data = await response.json();
      Cache.set(cacheKey, data, 10);
    } else {
      console.log('Cache hit');
    }

    return {
      data: { data },
      headers: {
        'Cache-Control': 'max-age=50000',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};

export let ssr = true;
export let csr = false;
