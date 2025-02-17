import {Option} from "../type/loginType";

export const LOGIN_MODAL = {
    NONE:"NONE",
    FIND:"FIND",
    JOIN:"JOIN"
}

export const RANK_OPTIONS : Option[]= [
    { value: 'staff', label: '사원' },
    { value: 'seniorStaff', label: '주임' },
    { value: 'assistantManager', label: '대리' },
    { value: 'manager', label: '과장' },
    { value: 'deputyManager', label: '차장' },
    { value: 'generalManager', label: '부장' },
]