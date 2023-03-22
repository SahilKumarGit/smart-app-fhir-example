const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json({ limit: '10mb' }))
app.use(express.static('./build'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'build/' })
);
app.all('/**', (req, res) => {
    bad(res, 404, false, '404 API NOT FOUND!')
})

app.listen(PORT, (e) => {
    if (e) console.log('⚠️ ', e.message)
    else console.log('✅ Server Started!')
})