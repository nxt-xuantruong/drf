import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/oauth";
import oauthServices from "../services/oauthServices";

export default function Root() {
  const oauthInfo = useSelector((state) => state.oauth.oauthInfo);
  const { access_token } = oauthInfo;
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    oauthServices
      .logout()
      .then((response) => {
        if (response && response.data) {
          console.log("logout success");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch(logOut());
      });
  };
  return (
    <div>
      <nav>
        <ul id="list-menu">
          <li>
            <Link to={`/home`}>Home</Link>
          </li>
          <li>
            <Link to={`products`}>Products</Link>
          </li>
          <li>
            <Link to={`users`}>Users</Link>
          </li>
        </ul>
        <div>
          <Link to="cart">
            <img
              width={50}
              height={50}
              alt="cart"
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"
            />
          </Link>
          {access_token && <button className="logout" onClick={handleLogout}>logout</button>}
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}
