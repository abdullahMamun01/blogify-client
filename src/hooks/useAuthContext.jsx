import React, { useContext } from 'react'
import { AuthContext } from '../contexts'

const useAuthContext = () => {
    const authContext = useContext(AuthContext)
    return authContext
}

export default useAuthContext