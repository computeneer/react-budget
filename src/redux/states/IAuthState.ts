import { IAuthUser } from "models/IAuthUser";
interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  token?: string;
  user?: IAuthUser;
}

export default IAuthState;
