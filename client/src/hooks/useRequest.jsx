import {useState, useEffect} from 'react'

function useRequest(requestFunction, deps=[]) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchData() {
        setLoading(true);
        try {
            const res = await requestFunction();
            setData(res.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    fetchData();
}, deps);
  return {data,error,loading}
}
export default useRequest;