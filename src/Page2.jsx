import { Link, Outlet, useLocation } from "react-router-dom";

export const Page2 = () => {
  const path = "/Page2";
  const isPage2 = useLocation().pathname === path;

  return (
    <>
      {isPage2 ? (
        <div>
          <h2>Page2ページです</h2>
          <Link to={`${path}/999`}>URLパラメータ</Link>
          <br />
          <Link to={`${path}/999?name=hogehoge`}>クエリパラメータ</Link>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
