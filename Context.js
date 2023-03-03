
import React, {useState, useEffect} from "react";

const Context = React.createContext()

const Provider = ({children}) => {
    const [time, setTime] = useState(120)
    const [add1, setAdd1] = useState(2)
    const [add2, setAdd2] = useState(100)
    const [add3, setAdd3] = useState(2)
    const [add4, setAdd4] = useState(100)
    const [mul1, setMul1] = useState(2)
    const [mul2, setMul2] = useState(12)
    const [mul3, setMul3] = useState(2)
    const [mul4, setMul4] = useState(100)
    const [score, setScore] = useState(0)

    return (
        <Context.Provider value={{
            time,
            setTime,
            add1,
            setAdd1,
            add2,
            setAdd2,
            add3,
            setAdd3,
            add4,
            setAdd4,
            mul1,
            setMul1,
            mul2,
            setMul2,
            mul3,
            setMul3,
            mul4,
            setMul4,
            score,
            setScore
        }}>
            {children}
        </Context.Provider>
    )
}

export {Context, Provider}