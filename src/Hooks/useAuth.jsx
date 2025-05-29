import React, { use } from 'react';
import { AuthCotext } from '../context/AuthContext';

const useAuth = () => {
    const authInfo =use(AuthCotext)
    return authInfo
}

export default useAuth;