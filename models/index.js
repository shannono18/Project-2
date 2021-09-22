const User = require('./User.js')
const Post = require('./Post.js')
const Beer = require('./Beer.js')

User.hasMany(Post, { foreignKey: 'uid' })
Post.belongsTo(User, { as: 'u', foreignKey: 'uid' })

module.exports = { User, Post, Beer }
