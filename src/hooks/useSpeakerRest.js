
import { useState, useEffect } from 'react'
import axios from 'axios'

export const REQUEST_STATUS = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    LOADING: 'loading'
}

const restUrl = 'api/speakers'

const useRequestRest = () => {
    const [data, setData] = useState([])
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState('')

    useEffect(async () => {
        try {
            const result = await axios.get(restUrl)
            // throw 'Had Error-304'
            setRequestStatus(REQUEST_STATUS.SUCCESS)
            setData(result.data)
        } catch (e) {
            setRequestStatus(REQUEST_STATUS.FAILURE)
        setError(e)
        }
    }, [])

    const updateRecord = (record, doneCallback) => {
        const originalData = [...data]
        const updatedList = data.map(rec => rec.id === record.id ? record : rec)
        const delayFunction = async () => {
            try {
                setData(updatedList)
                await axios.put(`${restUrl}/${record.id}`, record)
                // throw 'some error happened'
                if (doneCallback) {
                    doneCallback()
                }
            } catch (e) {
                if (doneCallback) doneCallback()
                setData(originalData)
                console.log(`the error is - ${e}`)
            }
        }
        delayFunction()
    }
    const insertRecord = (record, doneCallback) => {
        const originalData = [...data]
        const updatedList = [record, ...originalData]
        const delayFunction = async () => {
            try {
                setData(updatedList)
                await axios.post(`${restUrl}/99999`, record)
                // throw 'some error happened'
                if (doneCallback) {
                    doneCallback()
                }
            } catch (e) {
                if (doneCallback) doneCallback()
                setData(originalData)
                console.log(`the error is - ${e}`)
            }
        }
        delayFunction()
    }
    const deleteRecord = (record, doneCallback) => {
        const originalData = [...data]
        const updatedList = data.filter(rec => rec.id !== record.id )
        const delayFunction = async () => {
            try {
                setData(updatedList)
                await axios.delete(`${restUrl}/${record.id}`, record)
                // throw 'some error happened'
                if (doneCallback) {
                    doneCallback()
                }
            } catch (e) {
                if (doneCallback) doneCallback()
                setData(originalData)
                console.log(`the error is - ${e}`)
            }
        }
        delayFunction()
    }

    return {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord,
    }
}

export default useRequestRest
