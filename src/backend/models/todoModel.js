const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    todo: { type: 'String', required: true },
    dateLine: { type: Date, default: Math.random(new Date()) },
    complete: { type: Boolean, default: false },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Todo', TodoSchema)
