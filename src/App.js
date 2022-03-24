import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainRouters from "./routers/MainRouters";
import { SecondaryNavBar } from "./components";
import Footer from "./components/footer/Footer";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SecondaryNavBar />
          <MainRouters />
          <Footer />
        </PersistGate>
        </Provider>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
