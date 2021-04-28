import { PostModel } from '../models/PostModel.js'

export const getPost = async (req, res) => {
    try {
        const posts = await PostModel.find()
        console.log('posts', posts)
        res.status(200).json(posts)
    } catch (err) {
        res.status(500).json({ error: err })
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body();//lay du lieu tu phia client day len
        const post = new PostModel(newPost);//luu du lieu vao database : PostModel
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: err })
    }
}

export const updatePost = async (req, res) => {
    try {
        const updatePost = req.body();
        /* 
            * method findOneAndUpdate() tra ve object khi chua update 
            * muon lay du lieu moi sau khi update => them 1 option {new : true} => tra ve object sau khi update
        */
        const post = await PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true })
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: err })
    }
}
