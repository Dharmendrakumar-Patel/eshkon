'use client'
import ReduxProvider from "@/store/redux-provider";
import HomePage from "./home";

export default function Home() {
  return (
    <ReduxProvider>
      <HomePage />
    </ReduxProvider>
  );
}
