import * as tuitsDao from './tuits-dao.js'


const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.handle = "@NASA";
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.userName = "NASA";
    newTuit.time = "1m";
    newTuit.image = "nasa.jpeg";
    newTuit.topic = "Space";
    newTuit.dislikes = 0;
    newTuit.title = newTuit.tuit;
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates)
    if (status.modifiedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }

}

const deleteTuit = async (req, res) => {
    const tuitId = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitId);
    if (status.deletedCount === 1) {
        res.sendStatus(200);
    } else {
        res.sendStatus(502);
    }
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
