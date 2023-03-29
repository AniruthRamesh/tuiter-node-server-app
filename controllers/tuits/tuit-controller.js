import * as tuitsDao from "./tuits-dao.js"

const createTuit = async (req, res) => {
    const newTuit = req.body;

    newTuit.avatar = "./Images/tate.jpeg";
    newTuit.userName = "Andrew Tate"
    newTuit.handle = "@Matrix_hater"
    newTuit.verified = true
    newTuit.gold = true
    newTuit.timings = "March 27"
    
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
  //console.log("reached controller");
  const tuits = await tuitsDao.findTuits();
    res.json(tuits);
    //console.log(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao
                       .updateTuit(tuitdIdToUpdate,
                                   updates);
  res.json(status);

}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
