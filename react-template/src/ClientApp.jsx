"use client";
import dynamic from "next/dynamic";
const App = dynamic(() => import("./App"), {
  ssr: false,
  loading: () => (
    <div className="app-loading" role="status">
      Loading Gue Moni…
    </div>
  ),
});
export default App;
