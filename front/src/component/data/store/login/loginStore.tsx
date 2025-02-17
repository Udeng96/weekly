import {create} from "zustand/react";
import {UserType} from "../../type/loginType";

interface LoginStoreType{
    activeModalType: string,
    setActiveModalType : (activeModalType: string)=> void,

    userInfo : UserType | null,
    setUserInfo : (userInfo: UserType | null) => void,

}

export const useLoginStore = create<LoginStoreType>()((set)=>({
    activeModalType: "NONE",
    setActiveModalType : (activeModalType: string)=> set({activeModalType : activeModalType}),

    userInfo : null,
    setUserInfo : (userInfo: UserType | null) => set({userInfo: userInfo}),
}))