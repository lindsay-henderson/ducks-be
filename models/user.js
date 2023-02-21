import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, lowercase: true },
  password: String,
  profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true,
})

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  },
})

const User = mongoose.model('User', userSchema)

export { User }