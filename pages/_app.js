import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => storePathValues, [router.asPath]);

  const [prev, setPrev] = useState("");

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath);
    // Set the current path value by looking at the browser's location object.
    storage.setItem("currentPath", globalThis.location.pathname);
    setPrev(prevPath);
  }

  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Component {...pageProps} animateBg={prev && prev.charAt(0) != '/'}/>
    </ThemeProvider>
  )
}

export default MyApp
