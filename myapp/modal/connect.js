var orm = require('orm')

module.exports = orm.express('mysql://root:root@localhost:3306/play', {
  define: (db, models, next) => {
    console.log(123123)
    models.user = db.define('user', {
      id: Number,
      name: String
    })
    next()
  }
})