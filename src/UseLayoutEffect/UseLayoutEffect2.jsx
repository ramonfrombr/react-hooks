import React, {useLayoutEffect, useEffect, useRef} from 'react';

const UseLayoutEffect = () => {

    const inputReferencia = useRef(null);

    useLayoutEffect(() => {
        console.log(inputReferencia.current.value);
    }, []);
   
    useEffect(() => {
        inputReferencia.current.value = "Olá";
    }, []);

 

    return (
        <div>
            <input
                ref={inputReferencia}
                value="João"
                style={{
                    width: '100%',
                    height: '100px',
                    borer: '1px solid black',
                }}
            />
        </div>
    );
};

export default UseLayoutEffect;
