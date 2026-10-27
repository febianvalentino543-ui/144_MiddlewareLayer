import express from 'express'
import pg from 'pg'
import Joi from 'joi'

const app = express()
const port = 3000
const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Mahasiswa',
    password: '141414', //sesuaikan dengan password database masing masing
    port: 5432,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Middleware
app.use((req, res, next) => {
    const start = Date.now()

    res.on('finish', () => {
        const duration = Date.now() - start

        console.log({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: `${duration}ms`,
        })
    })

    next ()
})

// respon envelope
function successResponse(res, message, data, status = 200) {
    return res.status(status).json({
        success: true,
        message,
        data,
        error: null,
    })
}

function errorResponse(res, message, error, status = 500) {
    return res.status(status).json({
        success: false,
        message,
        data: null,
        error: details,
    })
}

