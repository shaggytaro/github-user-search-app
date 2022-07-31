import { useState, useEffect } from 'react';

const useGitHub = (userName) => {
    const [ user, setUser ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=> {
        //https://api.github.com/users/shaggytaro

       const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const responseData = await response.json();
            setUser(responseData);
            setLoading(false);
            console.log(responseData)
        } catch(error) {
            setError(error);
            setLoading(false);
        }
       }
        fetchData();
    }, [userName])

    return {user, loading, error}
}

export default useGitHub;