const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {

        const { show } = req.query
       
        superagent
            .get('https://api.spotify.com/v1/search?q=' + show + '&type=artist&market=US')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

    router.get('/api/artist', (req, res) => {

        const { artist } = req.query

       
        superagent
            .get('https://api.spotify.com/v1/artists/' + artist )
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })
    router.get('/api/albums', (req, res) => {

        const { albums } = req.query

       
        superagent
            .get('https://api.spotify.com/v1/artists/'+albums+'/albums')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })
    
    

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}

