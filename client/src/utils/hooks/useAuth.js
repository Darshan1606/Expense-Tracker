import { useDispatch, useSelector } from "react-redux";
import { setUser, initialState } from "store/auth/userSlice";
import { onSignInSuccess, onSignOutSuccess } from "store/auth/sessionSlice";
import appConfig from "configs/app.config";
import { REDIRECT_URL_KEY } from "constants/app.constant";
import { useNavigate } from "react-router-dom";
import useQuery from "./useQuery";
import { login } from "service/authService";
// import { login } from "service/authService";

function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();

  const { token, signedIn, expired } = useSelector(
    (state) => state.auth.session
  );

  const signIn = async (data) => {
    try {
      const resp = await login(data);
      if (resp?.success) {
        const token = resp?.token;

        dispatch(onSignInSuccess(token));

        dispatch(
          setUser({
            id: resp?.result?.id ? resp?.result?.id : "null",
            username: resp?.result?.name ? resp?.result?.name : "user",
            email: resp?.result?.email ? resp?.result?.email : "",
            authority: resp?.result?.role
              ? resp?.user?.role.split(" ")
              : ["user"],
          })
        );
      }
      const redirectUrl = query.get(REDIRECT_URL_KEY);
      navigate(redirectUrl ? redirectUrl : appConfig.authenticatedEntryPath);
      return {
        status: "success",
        message: "",
      };
    } catch (err) {
      console.log(err);
      return {
        status: "failed",
        message: err?.response?.data?.error?.message || err.toString(),
      };
    }
  };

  const handleSignOut = () => {
    dispatch(onSignOutSuccess());
    dispatch(setUser(initialState));
    navigate(appConfig.unAuthenticatedEntryPath);
  };

  const signOut = async () => {
    handleSignOut();
  };

  return {
    authenticated: token && signedIn && expired > new Date().getTime(),
    // authenticated: true,
    signIn,
    signOut,
  };
}

export default useAuth;
