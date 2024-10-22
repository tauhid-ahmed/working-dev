import React from "react";

export default function Teams() {
  const [response, setResponse] = React.useState();

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const onMount = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        signal,
      });
      const data = await response.json();
      if (!signal.aborted) {
        setResponse(data);
      }
    };
    onMount();
    return () => {
      controller.abort();
    };
  }, []);

  if (!response) return <div>Loading...</div>;
  return <div>{response.map((user: { name: string }) => user.name)}</div>;
}
