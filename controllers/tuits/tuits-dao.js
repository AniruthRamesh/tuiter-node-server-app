import tuitsModel from './tuits-model.js';
export const findTuits = async () => {
    //console.log("reached DAO");
    const tuits = await tuitsModel.find();
    return tuits;

}
export const createTuit = async (tuit) => {
    //console.log("creating tweet")
    const insertedTuit = tuitsModel.create(tuit);
    return insertedTuit;
}
export const deleteTuit = (tid) => {
    const result  = tuitsModel.deleteOne({_id: tid});
    return result;
}
export const updateTuit = (tid, tuit) => {
    const result = tuitsModel.updateOne({_id: tid}, {$set: tuit});
    return result;
}