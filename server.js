const path = require('path'),
    express = require('express'),
    app = express(),
    morgan = require('morgan'),
    dotenv = require('dotenv'),
    errorHandler = require('./middleware/errorHandler.js'),
    mongoSanitize = require('express-mongo-sanitize'),
    helmet = require('helmet'),
    xss = require('xss-clean'),
    rateLimit = require('express-rate-limit'),
    hpp = require('hpp'),
    cors = require('cors'),
    colors = require('colors'),
    connectDB = require('./config/db.js')

// config
if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './config/config.env' })
}
connectDB()
app.use(express.json())
app.use(morgan('dev'))

// security
app.use(mongoSanitize())
app.use(helmet())
app.use(xss())
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100
})
app.use(limiter)
app.use(hpp())
app.use(cors())

// router
const mailer = require('./routes/mailer.js')
const admin = require('./routes/admin.js')
app.use('/api/v1/approvedsites', admin)
app.use('/api/v1/mailer', mailer)

// errors
app.use(errorHandler)

// public
app.use(express.static(path.join(__dirname, 'public')))

// server
app.listen(process.env.PORT || 5000, () => console.log(`SERVER RUNNING ON PORT : ${process.env.PORT || 5000}`.yellow.bold))

// failsafe
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`.red);
    server.close(() => process.exit(1))
})