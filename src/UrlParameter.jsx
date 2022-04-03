import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  //クエリパラメータ
  const { search } = useLocation();
  //URLパラメータ
  const { id } = useParams();
  //
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>{id}</p>
      <p>クエリパラメータは{query.get("name")}</p>
    </div>
  );
};
