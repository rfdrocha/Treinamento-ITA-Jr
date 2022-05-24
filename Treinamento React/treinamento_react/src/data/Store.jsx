import React, {useState} from 'react'

const initialState = {
    user:"Rafael",
}
export const AppContext = React.createContext(initialState)

const Store = props => {
    const [state,setState] = useState(initialState)

    function updateState(key,value) {
        setState({
            ...state,
            [key]:value
        })
    }

    return (
        <AppContext.Provider value = {{
            user:state.user,
            setUser: nome => updateState('user',nome),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store