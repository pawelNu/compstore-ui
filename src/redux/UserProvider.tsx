import React, {
    createContext,
    useState,
    useContext,
    FC,
    ReactNode,
} from "react";

type UserContextType = {
    userRole: string;
    userRoleChange: (role: string) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [userRole, setUserRole] = useState<string>("Customer");

    const userRoleChange = (role: string) => {
        setUserRole(role);
    };

    return (
        <UserContext.Provider value={{ userRole, userRoleChange }}>
            {children}
        </UserContext.Provider>
    );
};
