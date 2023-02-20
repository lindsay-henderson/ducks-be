import mongoose from 'mongoose'

const Schema = mongoose.Schema
const clientSchema = new Schema ({
  name:{type:String, required: true},
  email: {type: String, required: true},
  social: {type: String},
  notes: {type: String},
  orders: {type: Schema.Types.ObjectId, ref: "Order"},
},
  {timestamps: true}
)

const Client = mongoose.model('Client', clientSchema)

export {
  Client
}