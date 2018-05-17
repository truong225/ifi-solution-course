import React from 'react'

/**
 * if create component by functional approach
 * all function and component must start with capital letter
 */
export const FunctionalApp=()=>{
    return(
        <div>Function Component</div>
    )
}

export function HelloApp(props){
    return <h1>Hello {props.name}</h1>
}