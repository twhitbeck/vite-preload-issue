import { useEffect, useState } from 'react';

export default function App() {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    fetch('/config.json')
      .then((res) => res.json())
      .then(setConfig);
  }, []);

  return <pre>{JSON.stringify(config ?? {}, null, 2)}</pre>;
}
