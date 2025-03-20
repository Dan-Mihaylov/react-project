import { createContext } from "react";

export const CompanyContext = createContext({
    _id: '',
    email: '',
    companyName: '',
    companyAddress: '',
    companyImageUrl: '',
    accessToken: '',
    isAuthenticated: false,
    companyLoginHandler: () => null,
    companyLogoutHandler: () => null,
});
