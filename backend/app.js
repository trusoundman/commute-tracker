const express = require('express');
const app = express();

const totalTrips = [
    {
        id: 1,
        date: '12/13/2018',
        distance: '31 miles'
    },
    {
        id: 2,
        date: '12/13/2018',
        distance: '32 miles'
    }
]

app.get('/api/trip', (req, res) => {
    app.status(200).send(totalTrips)
})

app.listen(3001, () => console.log('listening on 3001'))