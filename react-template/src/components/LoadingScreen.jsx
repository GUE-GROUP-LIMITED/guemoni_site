import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen" role="status" aria-label="Loading Gue Moni">
      <div className="loading-panels" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => (
          <span
            className="loading-panel"
            key={index}
            style={{ "--panel-index": index }}
          />
        ))}
      </div>
    </div>
  );
}
