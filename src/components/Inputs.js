import React, { useRef, useState } from 'react';

const Inputs = ({add}) => {
    //인풋에 입력했을때 실행되는 함수
    const [InputText, setInputText] = useState("");
    const onChangeInput = (e) => {
        setInputText(e.target.value);
    }
    const idnum = useRef(4);
    console.log(idnum);
    //버튼을 클릭할 때 실행될 함수
    const onClick = () => {
        add({id:idnum.current, username:InputText})
        idnum.current++;
    }
    return (
        <div>
            <input name='username' onChange={onChangeInput}/>
            <button onClick={onClick}>추가</button>
            <p>{InputText}</p>
        </div>
    );
};

export default Inputs;