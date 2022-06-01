import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";
import { store } from "./shared/store";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <MainRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
