import React from "react";

const BASE_URL = "http:127.0.0.1:3000";

export function getVans(path: string) {
  const [response, setResponse] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
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
