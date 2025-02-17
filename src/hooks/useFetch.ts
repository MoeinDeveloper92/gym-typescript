import { useEffect, useState } from 'react';

interface OptionsProps<TBody> {
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: TBody;
  headers?: HeadersInit;
}

interface FetchResults<T> {
  data: T | T[] | null;
  loading: boolean;
  error: string | null;
}

export const useFetch = <T, TBody = any>(
  url: string,
  options?: OptionsProps<TBody>
): FetchResults<T> => {
    // useFetch<Product>("url")
  const [data, setData] = useState<T | T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: options?.method || 'GET',
          body: options?.body ? JSON.stringify(options.body) : undefined,
          headers: {
            ...options?.headers,
          },
        });
        if (!response.ok) {
          throw new Error(
            `HTTP ERROR: ${response.status} ${response.statusText}`
          );
        }
        const result: T | T[] = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message || 'An unexpected error occured!');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};
