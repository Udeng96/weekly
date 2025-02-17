import {useLoginStore} from "../../../../data/store/login/loginStore";
import {LOGIN_MODAL, RANK_OPTIONS} from "../../../../data/const/loginConst";
import Select from "react-select";
import {useState} from "react";
import {Option, UserType} from "../../../../data/type/loginType";
import {useMutation} from "@tanstack/react-query";
import {saveUserInfo} from "../../../../data/query/api/login/loginApi";

const JoinModal = () => {


    const {activeModalType, setActiveModalType} = useLoginStore();
    const [isRankOpen, setIsRankOpen] = useState<boolean>(false);
    const [pwdChk, setPwdChk] = useState<string>("");
    const [selectRank, setSelectRank] = useState<Option>({label: '전체', value: 'all'});
    const [param, setParam] = useState<UserType>({
        id: "",
        pwd: "",
        name: "",
        birth: "",
        depart: "",
        rank: "",
        email: "",
        tel: ""
    });

    const handleRank = (e: Option) => {
        setSelectRank(e);
        setParam({...param, rank: e.value})
    }

    const handleClsBtn = () => {
        setActiveModalType(LOGIN_MODAL.NONE);
        setParam({
            id: "",
            pwd: "",
            pwdchk: "",
            name: "",
            birth: "",
            depart: "",
            rank: "",
            email: "",
            tel: ""
        })
        setSelectRank({label: '전체', value: 'all'});
    }

    const handleJoinBtn = () => {
        if (param.id === "" || param.pwd === "" || param.name === "" || param.birth === "" || param.depart === "" || param.rank === "" || param.email === "" || param.tel === "") {
            alert("비어있는 정보가 있습니다. 기입하여주세요.");
        } else {
            saveUserMutate.mutate({userInfo: param});
        }
    }

    const saveUserMutate = useMutation({
        mutationFn: saveUserInfo,
        onSuccess: (data) => {
            if (data) {
                alert("회원가입에 성공했습니다.")
                setActiveModalType(LOGIN_MODAL.NONE);
            } else {
                alert("회원가입에 실패했습니다.")

            }
        }
    })


    return (
        <div className={`modal_container ${activeModalType === LOGIN_MODAL.JOIN ? 'active' : ''}`}>
            <div className={`modal_dimmed`}/>
            <div className={`modal_wrap`}>
                <div className={`modal join_modal`}>
                    <div className={'modal_head'}>
                        <p className={"modal_title"}>회원 가입</p>
                        <button className={"modal_cls_btn"} onClick={() => handleClsBtn()}>

                        </button>
                    </div>
                    <div className={"modal_body"}>
                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>아이디</p>
                                <input className={"modal_body_box_input"} value={param.id}
                                       onChange={(e) => setParam({...param, id: e.target.value})}/>
                            </div>
                        </div>

                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>비밀번호</p>
                                <input className={"modal_body_box_input"} type={"password"} value={param.pwd}
                                       onChange={(e) => setParam({...param, pwd: e.target.value})}/>
                            </div>
                        </div>

                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>비밀번호 확인</p>
                                <input className={"modal_body_box_input"} type={"password"} value={pwdChk}
                                       onChange={(e) => setPwdChk(e.target.value)}/>
                            </div>
                            <span
                                className={"modal_body_box_msg"}>{pwdChk !== param.pwd ? "비밀번호와 일치하지 않습니다" : ""}</span>
                        </div>

                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>이름</p>
                                <input className={"modal_body_box_input"} value={param.name}
                                       onChange={(e) => setParam({...param, name: e.target.value})}/>
                            </div>
                        </div>
                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>생년월일</p>
                                <input className={"modal_body_box_input"} placeholder={"YYMMDD"} value={param.birth}
                                       onChange={(e) => setParam({...param, birth: e.target.value})}/>
                            </div>
                            <span
                                className={"modal_body_box_msg"}>{/^\d{6}$/.test(param.birth) || param.birth === "" ? '' : '생일 형식이 잘못됐습니다.'}</span>

                        </div>

                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>부서</p>
                                <input className={"modal_body_box_input"} value={param.depart}
                                       onChange={(e) => setParam({...param, depart: e.target.value})}/>
                            </div>
                        </div>
                        <div className={`modal_body_box`}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>직급</p>
                                <div className={`modal_body_box_select ${isRankOpen ? 'focused' : ''}`}>
                                    <Select classNamePrefix={"rank_select"} onMenuOpen={() => setIsRankOpen(true)}
                                            onMenuClose={() => setIsRankOpen(false)} options={RANK_OPTIONS}
                                            value={selectRank} onChange={(e) => handleRank(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>회사메일</p>
                                <input className={"modal_body_box_input"} type={"email"}
                                       placeholder={"eseict.com 도메인만 가능"}
                                       value={param.email}
                                       onChange={(e) => setParam({...param, email: e.target.value})}/>
                            </div>
                            <span
                                className={"modal_body_box_msg"}>{/[a-zA-Z0-9._%+-]+@eseict\.com$/.test(param.email) || param.email === "" ? '' : '이메일 형식이 잘못됐습니다.'}</span>

                        </div>

                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <p className={"modal_body_box_nm"}>전화번호</p>
                                <input className={"modal_body_box_input"} type={"tel"}
                                       pattern={"[0-9]{3}-[0-9]{4}-[0-9]{4}"} placeholder={"xxx-xxxx-xxxx"}
                                       value={param.tel} onChange={(e) => setParam({...param, tel: e.target.value})}/>
                            </div>
                            <span
                                className={"modal_body_box_msg"}>{/[0-9]{3}-[0-9]{4}-[0-9]{4}/.test(param.tel) || param.tel === "" ? '' : '전화번호 형식이 잘못됐습니다.'}</span>

                        </div>
                        <div className={"modal_body_box"}>
                            <div className={"modal_body_box_area"}>
                                <button className={"modal_join_btn"}
                                        disabled={!/[0-9]{3}-[0-9]{4}-[0-9]{4}/.test(param.tel) || !/[a-zA-Z0-9._%+-]+@eseict\.com$/.test(param.email) || !/^\d{6}$/.test(param.birth) || pwdChk !== param.pwd}
                                        onClick={() => handleJoinBtn()}>등록
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default JoinModal