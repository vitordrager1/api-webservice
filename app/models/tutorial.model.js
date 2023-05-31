
//AQUI CRIAMOS UMA TABELA NO BANCO POR MEIO DO SEQUELIZE
//O SEQUELIZE TUTORIAL.MODEL.JS REPRESENTA UMA TABELA NO MYSQL
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
        type: Sequelize.STRING
        },
        description: {
        type: Sequelize.STRING
        },
        published: {
        type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
  };