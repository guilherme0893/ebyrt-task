import React from "react";
import GlobalProvider from "./context/GlobalProvider";
import Routes from "./routes/Routes";

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
