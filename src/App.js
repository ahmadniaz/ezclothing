import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routes/navigation/Navigation.component";
import Home from "./components/routes/home/Home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
