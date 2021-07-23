
import { useState, useEffect } from 'react'

export const REQUEST_STATUS = {
    SUCCESS: 'success',
    FAILURE: 'failure',
    LOADING: 'loading'
}

const useRequestDelay = (delayTime, initialData = []) => {
    const [data, setData] = useState(initialData)
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)
    const [error, setError] = useState('')

    const delay = ms => new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(async () => {
        try {
            await delay(delayTime)
            // throw 'Had Error-304'
            setRequestStatus(REQUEST_STATUS.SUCCESS)
            setData(data)
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
                await delay(delayTime)
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
                await delay(delayTime)
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
                await delay(delayTime)
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

export default useRequestDelay
