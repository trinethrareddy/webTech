import React, {useState, useEffect} from 'react';

export function useCheckNumberType(number) {
    const [even, setEvenType] = useState(null);

    useEffect(()=>{
        const isEven = number%2 ===0;
        setEvenType(isEven);
    });

    return even;
}