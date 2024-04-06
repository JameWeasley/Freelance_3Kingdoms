const express = require("express")
const cors = require("cors")
const sql = require('mssql');
const cookieSession = require('express-session')

const app = express()
const config = {
    user: 'sa',
    password: 'test123456',
    server: 'localhost', // เช่น 'localhost'
    database: 'Account',
    options: {
        encrypt: false, // ถ้าใช้เป็น true ในการเชื่อมต่อกับ SQL Server ที่ใช้ Encryption
    },
};
async function connectToDatabase() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to database');
        return pool;
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('dist'))

app.use(cookieSession({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

app.post("/api/login" , async (req ,res ) => {
    try {
        if (req.session?.username) {
            return res.send({ username: req.session?.username })
        }

        const { account , password } = req.body

        if (!account || !password) { return res.send(false) }

        const pool = await connectToDatabase()
        const request = pool.request()

        if (request) {
            request.input('account' , sql.NVarChar , account)
            const results = await request.query("SELECT account , password FROM game_acc WHERE account = @account")

            if (results.rowsAffected[0] > 0) {
                if (results.recordset[0].password === password) {
                    req.session.username = account
                    return res.send({ username: account })
                }
            }
        }

    }catch(err) {
        console.log(err);
    }

    return res.send(false)
})

app.get("/api/logout" , async (req ,res) => {
    try {
        if (req.session?.username) {
            req.session = null
        }

        return res.send(true)
    }catch(err) {
        console.log(err);
    }

    return res.send(true)
})

app.post("/api/register" , async (req , res) => {
    try {

        if (req.session?.username) {
            return res.send({ username: req.session?.username })
        }

        const {account , password , confirm_password} = req.body
  
        if (!account || !password || !confirm_password) {
            return res.send(false)
        }
        if (password !== confirm_password) { return res.send(false) }
    
        let pool = await connectToDatabase()
        const request = pool.request()
        if (request) {
            request.input('account' , sql.NVarChar , account)
            const results = await request.query(`SELECT account FROM game_acc WHERE account = @account`)
    
            if (results.rowsAffected[0] == 0) {
                const TimeObject = new Date()
    
                const Time = `${TimeObject.getFullYear()}-${TimeObject.getMonth().toString().padStart(2 , '0')}-${TimeObject.getDate().toString().padStart(2 , '0')} ${TimeObject.getHours().toString().padStart(2, '0')}:${TimeObject.getMinutes().toString().padStart(2 , '0')}:${TimeObject.getSeconds().toString().padStart(2,'0')}`
    
                const InsertRequest = pool.request()
                InsertRequest.input('account' , sql.NVarChar , account)
                InsertRequest.input('password' , sql.NVarChar , password)
                InsertRequest.input('time' , sql.NVarChar , Time)
                const re = await InsertRequest.query("INSERT INTO game_acc (account , password , create_time) VALUES(@account , @password , @time)")
                if (re.rowsAffected[0] > 0) {
                    return res.send(true)
                }
             
            }
    
        }
    }catch(err) {
        console.log(err);
    }
    
    return res.send(false)
})

const port = 5000
app.listen(port , async () => {
    console.log("running");
})