import tuitsModel from './tuits-model.js';
export const findTuits = () => {
    console.log("reached DAO");
    tuitsModel.find();
}
export const createTuit = (tuit) => {
    console.log("creating tweet")
    tuitsModel.create(tuit);
}
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
export const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit});