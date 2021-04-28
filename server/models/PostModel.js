import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous',
    },
    attachment: {
        type: String,
    },
    likeCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true }) //timestamps = true => tự động thêm 2 fill createdAt and updatedAt

export const PostModel = mongoose.model('Post', schema);