import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Nomatch } from "../Nomatch";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="Page1" element={<Page1 />}>
        <Route path="DetailA" element={<Page1DetailA />} />
        <Route path="DetailB" element={<Page1DetailB />} />
      </Route>
      <Route path="Page2" element={<Page2 />}>
        <Route path=":id" element={<UrlParameter />} />
      </Route>
      <Route path="*" element={<Nomatch />} />
    </Routes>
  );
};
