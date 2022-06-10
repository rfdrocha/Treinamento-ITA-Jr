import React from 'react'

export const data = {
    user:'Anônimo',
}

export const axiosConfig = {
    headers: {
        Authorization: "Bearer " + "token"
    }
}

const DataContext = React.createContext(data)

export default DataContext