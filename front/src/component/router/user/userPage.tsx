import {useNavigate} from "react-router-dom";
import {useLoginStore} from "../../data/store/login/loginStore";
import {useEffect} from "react";
import {RANK_OPTIONS} from "../../data/const/loginConst";

const UserPage = () => {

    const navigate = useNavigate();
    const {userInfo} = useLoginStore();

    useEffect(() => {
        if (userInfo === null) {
            navigate("/login")
        }
    }, [userInfo])

    return (

        <div className={"user_container"}>
            <div className={"user_top"}>
                {
                    userInfo&&
                    <div className={"box profile"}>
                        <div className={"info_box"}>
                            <p className={"user"}>{userInfo.name}<span>{RANK_OPTIONS.filter((rank)=> rank.value ===userInfo?.rank)[0].label} / {userInfo.depart}</span></p>
                            <button className={"logout"}>로그아웃</button>
                        </div>
                        <p className={"plus"}>{userInfo.email} / {userInfo.tel}</p>
                    </div>
                }
            </div>
            <div className={"user_body"}>
                <div className={"box nav_wrap"}>
                    <button className={"nav todo"}/>
                    <button className={"nav calendar"}/>
                    <button className={"nav setting"}/>
                </div>
                <div className={"box content_wrap"}>
                    <div className={"content todo"}>
                        <div className={"week"}>2월 3째주<span>(2025-02-17 ~ 2025-02-21)</span></div>
                        <div className={"list_wrap"}>
                            <div className={"list_item"}>
                                <div className={"header"}>
                                    <p className={"title"}>2월 17일 월요일</p>
                                    <button className={"add_btn"}>편집하기</button>
                                </div>
                                <div className={"body"}></div>
                            </div>
                            <div className={"list_item"}>
                                <div className={"header"}>
                                    <p className={"title"}>2월 17일 월요일</p>
                                    <button className={"add_btn"}>편집하기</button>
                                </div>
                                <div className={"body"}></div>
                            </div>
                            <div className={"list_item"}>
                                <div className={"header"}>
                                    <p className={"title"}>2월 17일 월요일</p>
                                    <button className={"add_btn"}>편집하기</button>
                                </div>
                                <div className={"body"}></div>
                            </div>
                            <div className={"list_item"}>
                                <div className={"header"}>
                                    <p className={"title"}>2월 17일 월요일</p>
                                    <button className={"add_btn"}>편집하기</button>
                                </div>
                                <div className={"body"}></div>
                            </div>
                            <div className={"list_item"}>
                                <div className={"header"}>
                                    <p className={"title"}>2월 17일 월요일</p>
                                    <button className={"add_btn"}>편집하기</button>
                                </div>
                                <div className={"body"}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>


    )

}

export default UserPage