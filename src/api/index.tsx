import React from "react";

const BASE_URL = "/api";

export function useFetch(path: string) {
  const [response, setResponse] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async (): Promise<void> => {
      try {
        const res = await fetch(`${BASE_URL}/${path}`, {
          signal: signal,
        });
        const data = await res.json();
        if (!signal.aborted) {
          setResponse(data);
        }
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          alert(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);

  return {
    response,
    isLoading,
  };
}

export function useVans() {
  const { response, isLoading } = useFetch("vans");

  return {
    vans: response.vans,
    isLoading,
  };
}

export function getOneVan(id: string) {
  const { response, isLoading } = useFetch(`vans/${id}`);
  return {
    van: response.vans,
    isLoading,
  };
}

export function getHostVans() {
  const { response, isLoading } = useFetch(`host/vans`);
  return {
    vans: response.vans,
    isLoading,
  };
}

export function getHostVansByVanId(id: string) {
  const { response, isLoading } = useFetch(`host/vans/${id}`);
  return {
    van: response.vans,
    isLoading,
  };
}
