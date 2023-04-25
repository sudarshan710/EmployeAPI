import mongoose from "mongoose"

const dataScheme = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    name:{
        required: true,
        type: String
    },
    department:{
        required: false,
        type: String
    },
    age:{
        required: false,
        type: Number
    }
})

const Model = mongoose.model('Employee', dataScheme);

export default Model;