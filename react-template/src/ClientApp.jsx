"use client";
import dynamic from "next/dynamic";
import LoadingScreen from "./components/LoadingScreen";
const App = dynamic(() => import("./App"), {
  ssr: false,
  loading: LoadingScreen,
});
export default App;
