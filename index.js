const {sequelize} = requier ('sequelize')

const sequelize = new Sequelize('database', null, null, {
    dialect: 'mssql',
    dialectOptions: {
      authentication: {
        type: 'ntlm',
        options: {
          domain: 'yourDomain',
          userName: 'username',
          password: 'password'
        }
      },
      options: {
        instanceName: 'SQLEXPRESS'
      }
    }
  })