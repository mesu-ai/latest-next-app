import { default as mongoose } from "mongoose";

const likeSchema= new mongoose.Schema({
  postId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Post',
    required: true
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
  }

})

const Like= mongoose.models.Like || mongoose.model('Like', likeSchema)
export default Like;