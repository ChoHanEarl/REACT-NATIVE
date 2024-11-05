//특정 API에 GET 요청을 보내고 응답을 받아보자.
import { useState, useEffect } from 'react'

//useFetch훅을 호출할 때 url을 전달받겠다.
export const useFetch = url => {
    const [inProgress, setInProgress] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                setInProgress(true)
                const res = await fetch(url) // url에 비동기 통신 요청(default get방식)
                const result = await res.json() // fetch를 통해 얻은 데이터는 json형식으로 변환해야 한다.
                if(res.ok) {
                    setData(result)
                    setError(null)
                } else {
                    throw result
                }
            } catch (error) {
                setError(error)
            } finally {
                setInProgress(false)
            }
        }//fetchData
        fetchData()
    },[])
    return {data, error, inProgress}
}