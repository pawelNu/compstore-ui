import React, {
    createContext,
    useState,
    useContext,
    FC,
    ReactNode,
} from "react";

type ErrorContextType = {
    error: string | null;
    handleError: (errorMessage: string) => void;
    clearError: () => void;
};

const ErrorContext = createContext<ErrorContextType | null>(null);

export const useError = (): ErrorContextType => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error("useError must be used within a ErrorProvider");
    }
    return context;
};

export const ErrorProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [error, setError] = useState<string | null>(null);

    const handleError = (errorMessage: string) => {
        setError(errorMessage);
    };

    const clearError = () => {
        setError(null);
    };

    return (
        <ErrorContext.Provider value={{ error, handleError, clearError }}>
            {children}
        </ErrorContext.Provider>
    );
};
