import {useLoginStore} from "../../data/store/login/loginStore";
import {LOGIN_MODAL} from "../../data/const/loginConst";
import {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {LOGIN_OP} from "../../data/query/api/login/loginSet";
import {fetchUserInfo} from "../../data/query/api/login/loginApi";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

    const {setActiveModalType, setUserInfo, userInfo} = useLoginStore();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [id, setId] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    const [requestLogin, setRequestLogin] = useState<boolean>(false);

    const {data} = useQuery({
        queryKey: [LOGIN_OP.USER.queryKey.INFO,],
        queryFn: () => fetchUserInfo({loginId: id, loginPwd: pwd}),
        enabled: requestLogin
    })

    const handleLoginBtn = () => {
        if (id !== "" && pwd !== "") {
            setRequestLogin(true);
        } else {
            alert("아이디 및 비밀번호를 입력해주세요.");

        }
    }

    useEffect(() => {
        if (data) {
            if (isChecked) {
                localStorage.setItem("userId", data.data.id);
                localStorage.setItem("userPwd", data.data.id);
            } else {
                sessionStorage.setItem("userId", data.data.id);
                sessionStorage.setItem("userPwd", data.data.pwd);
            }

            setUserInfo(data.data);

        } else {
            if (requestLogin) {
                alert("로그인에 실패했습니다.")
            }
        }

        setRequestLogin(false);
    }, [data])

    useEffect(() => {
            if (userInfo) {
                navigate(`/user/${userInfo.id}`)
            } else {
                let localId = localStorage.getItem("userId");
                let localPwd = localStorage.getItem("userPwd");
                let sessionId = sessionStorage.getItem("userId");
                let sessionPwd = sessionStorage.getItem("userPwd");
                if (sessionId && sessionPwd) {
                    setId(sessionId);
                    setPwd(sessionPwd);
                    setRequestLogin(true);
                } else if (localId && localPwd) {
                    setId(localId);
                    setPwd(localPwd);
                    setRequestLogin(true);
                }
            }
        }, [userInfo]
    )


    return (
        <div className={"container"}>
            <div className={"login_logo_area"}>
                <div className={"login_logo"}/>
            </div>
            <div className={"login_input_area"}>
                <input className={"id_area"} onChange={(e) => setId(e.target.value)} placeholder={"id를 입력해주세요"}/>
                <input className={"pwd_area"} type={"password"} checked={isChecked}
                       onChange={(e) => setPwd(e.target.value)} placeholder={"password를 입력해주세요"}/>
                <button className={"login_btn"} onClick={() => handleLoginBtn()}>로그인</button>
                <div className={"login_add_func"}>
                    <input id={"loginSaveChk"} className={"login_info_save_chk"} type={"checkbox"}
                           onChange={(e) => setIsChecked(!isChecked)}/>
                    <label className={"login_info_save_label"} htmlFor={"loginSaveChk"}>로그인 유지</label>
                    <span className={"divide_line"}/>
                    <button className={"login_find_info_label"} onClick={() => setActiveModalType(LOGIN_MODAL.FIND)}>계정
                        찾기
                    </button>
                    <span className={"divide_line"}/>
                    <button className={"login_join_info_label"} onClick={() => setActiveModalType(LOGIN_MODAL.JOIN)}>회원
                        가입
                    </button>
                </div>

            </div>
        </div>
    )
}

export default LoginPage