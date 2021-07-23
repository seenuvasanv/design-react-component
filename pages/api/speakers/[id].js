import path from 'path'
import fs from 'fs'

const { promisify } = require('util')

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export default async function handler(req, res) {

    const method = req?.method
    const id = parseInt(req?.query.id)
    const recordFromBody = req?.body
    const jsonFile = path.resolve('./', 'db.json')

    const putMethod = async () => {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const speakers = JSON.parse(readFileData).speakers
            if (!speakers) {
                res.status(404).send('File not found on server')
            } else {
                const newSpeakersArray = speakers.map(rec => rec.id === id ? recordFromBody : rec)
                await writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))
                res.setHeader('Content-Type', 'application/json')
                res.status(200).send(JSON.stringify(speakers, null, 2))
                console.log(`PUT /api/speakers/${id} status: 200`)
            }
        } catch (e) {
            console.log('Error ,', e)
            res.status(500).send(`PUT /api/speakers/${id} status: 500 unexpected error`)
        }
    }

    const deleteMethod = async () => {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const speakers = JSON.parse(readFileData).speakers
            if (!speakers) {
                res.status(404).send('File not found on server')
            } else {
                const newSpeakersArray = speakers.filter(rec => rec.id !== id)
                await writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))
                res.setHeader('Content-Type', 'application/json')
                res.status(200).send(JSON.stringify(speakers, null, 2))
                console.log(`DELETE /api/speakers/${id} status: 200`)
            }
        } catch (e) {
            console.log('Error ,', e)
            res.status(500).send(`DELETE /api/speakers/${id} status: 500 unexpected error`)
        }
    }

    const postMethod = async () => {
        try {
            const readFileData = await readFile(jsonFile)
            await delay(1000)
            const speakers = JSON.parse(readFileData).speakers
            if (!speakers) {
                res.status(404).send('File not found on server')
            } else {
                const newId = speakers.reduce((acc, cur) => {
                    const curId = parseInt(cur.id)
                    return acc > curId ? acc : curId
                }, 0)
                const newSpeakerRec = {
                    ...recordFromBody,
                    id: newId.toString()
                }
                const newSpeakersArray = [newSpeakerRec, ...speakers]
                await writeFile(jsonFile, JSON.stringify({ speakers: newSpeakersArray }, null, 2))
                res.setHeader('Content-Type', 'application/json')
                res.status(200).send(JSON.stringify(speakers, null, 2))
                console.log(`PUT /api/speakers/${id} status: 200`)
            }
        } catch (e) {
            console.log('Error ,', e)
            res.status(500).send(`POST /api/speakers/${id} status: 500 unexpected error`)
        }
    }

    switch (method) {
        case "POST":
            await postMethod()
            break;
        case "PUT":
            await putMethod()
            break;
        case "DELETE":
            await deleteMethod()
            break;
    
        default:
            console.log(`Method ${method} not implemented`)
            res.status(501).send(`Method ${method} not implemented`)
            break;
    }
}