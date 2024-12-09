import { createContext } from "react";

const UserContext = createContext({
  userName: 'Default',
  setUserName: () => {}
})

export default UserContext;
