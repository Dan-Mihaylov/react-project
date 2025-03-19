import { createContext } from "react";

export const CompanyContext = createContext({
    _id: '',
    email: '',
    companyName: '',
    companyAddress: '',
    companyImageUrl: '',
    accessToken: '',
    companyLoginHandler: () => null,
    companyLogoutHandler: () => null,
});
