import { Link, Outlet, useLocation } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const path = "/Page1";
  const isPage1 = useLocation().pathname === path;

  return (
    <>
      {isPage1 ? (
        <div>
          <h2>Page1ページです</h2>
          <Link to={`${path}/DetailA`} state={arr}>
            detailA
          </Link>
          <br />
          <Link to={`${path}/DetailB`}>detailB</Link>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
