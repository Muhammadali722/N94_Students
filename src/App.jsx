import React from "react";
import HeaderPage from "./modules/Header";
import HeroPage from "./modules/hero";
import { Toaster } from "react-hot-toast";

// starting at 17:22
// took a break at 18:40
function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderPage />
      <HeroPage />
    </>
  );
}
//

export default App;
