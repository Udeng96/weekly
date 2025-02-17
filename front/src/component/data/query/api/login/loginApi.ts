import axios, {AxiosResponse} from "axios";
import {LOGIN_OP} from "./loginSet";
import {UserType} from "../../../type/loginType";

export const fetchUserInfo = async (param: {loginId: string, loginPwd: string}): Promise<AxiosResponse<UserType>> => {
    return await axios.get(LOGIN_OP.USER.url,{
        params : {...param}
    })
}

export const saveUserInfo = async (body: {userInfo: UserType}) : Promise<AxiosResponse<boolean>> => {
    const {data} = await axios.post(LOGIN_OP.USER.url, {...body.userInfo});
    return data;
}

export const editUserInfo = async (body:{userInfo : UserType}) : Promise<AxiosResponse<UserType>> => {
    const {data} = await axios.put(LOGIN_OP.USER.url, body);
    return data;
}