import {useLoginStore} from "../../../../data/store/login/loginStore";
import {LOGIN_MODAL} from "../../../../data/const/loginConst";

const FindModal = () => {

    const {activeModalType, setActiveModalType} = useLoginStore();
    const handleClsBtn = () => {
        setActiveModalType(LOGIN_MODAL.NONE);
    }

    return(
        <div className={`modal_container ${activeModalType === LOGIN_MODAL.FIND? 'active' : ''}`}>
            <div className={`modal_dimmed`}/>
            <div className={`modal_wrap`}>
                <div className={`modal find_modal`}>
                    <div className={'modal_head'}>
                        <p className={"modal_title"}>계정 찾기</p>
                        <button className={"modal_cls_btn"} onClick={()=>handleClsBtn()}>

                        </button>
                    </div>
                    <div className={"modal_body"}>
                        <div className={"modal_body_box"}>
                            <p className={"modal_body_box_nm"}>이름</p>
                            <input className={"modal_body_box_input"}/>
                        </div>

                        <div className={"modal_body_box"}>
                            <p className={"modal_body_box_nm"}>생년월일</p>
                            <input className={"modal_body_box_input"}/>
                        </div>
                        <div className={"modal_body_box"}>
                            <button className={"modal_find_btn"}>찾기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FindModal