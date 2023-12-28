import { useSelector } from "react-redux";
import LogInForm from "../../components/LogInForm";

function Cart() {
  const oauthInfo = useSelector((state) => state.oauth.oauthInfo);
  const { access_token } = oauthInfo;
  if (!access_token) {
    return <LogInForm />;
  }
  return <h2>Cart</h2>;
}

export default Cart;
