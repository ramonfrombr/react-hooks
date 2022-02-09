import React, {useLayoutEffect, useEffect} from 'react';

const UseLayoutEffect = () => {

   
    useEffect(() => {
        console.log("UseEffect")
    }, []);

     useLayoutEffect(() => {
        console.log("UseLayoutEffect")
    }, []);


    return (
        <div>

        </div>
    );
};

export default UseLayoutEffect;
