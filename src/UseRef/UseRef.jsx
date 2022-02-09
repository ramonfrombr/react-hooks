import React, {useRef} from 'react';

const UseRef = () => {

    const inputReferencia = useRef(null)

    const onClick = () => {
        inputReferencia.current.value = '';
        inputReferencia.current.focus();
    }

    return (
    <div>
        <input
            ref={inputReferencia}
            type="text"
            placeholder="Digite..."
        />
        <button onClick={onClick}>console.log</button>
    </div>
    );
};

export default UseRef;
