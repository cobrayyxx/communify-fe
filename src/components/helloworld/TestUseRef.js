import React, { useState, useEffect, useRef, createRef } from 'react'

const TestUseRef = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    const prevName = useRef()
    const inputRef = createRef()

    useEffect(() => {
      renderCount.current = renderCount.current+1
      prevName.current = name
    })
    
    return (
        <>
            <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}></input>
            <div>My name is {name} and it used to be {prevName.current}</div>
            <div>Render {renderCount.current} times</div>
            <button onClick={()=>{inputRef.current?.focus()}}>Focus</button>
        </>
    )
}

export default TestUseRef