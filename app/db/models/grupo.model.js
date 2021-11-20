const{DataTypes} = require('sequelize');
const name = require('path').basename(__filename.replace(".model",""),'.js')
const sequelize = require('../index').getConnection();

const Grupo = sequelize.define(name,
    {
        descricao: {
        type: DataTypes.STRING(50)
    },

    createdAt: {
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    upadatedAt: {
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
    },
    {
        sequelize,
        tableName:name
    }
)

Grupo.associate = models=>{
    
    Grupo.belongsToMany(models.aluno,{
        through: 'aluno_grupo',
        timestamps: false,
        foreignKey:{
            name:'id_grupo'
        },
        as:'aluno'
    })

    Grupo.belongsTo(models.atividade_avaliativa,{
        foreignKey:{
            name:'id_grupo'
        },
        as:'atividades_avaliativas'
    })
}


module.exports = Grupo