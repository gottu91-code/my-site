import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";

export const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(0);
  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
  }, [])

  return (
    <>
      <Header _ref={headerRef} />
      <Main headerHeight={headerHeight}>
        <Profile />
        <Posts headerHeight={headerHeight} />
      </Main>
      <Footer />
    </>
  )
}