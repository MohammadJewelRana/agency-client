import React, { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {






    const authInfo = {
        name: 'jewel rana'
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;