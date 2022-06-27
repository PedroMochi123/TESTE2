'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promocao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Promocao.belongsTo(models.Empresa, {foreignKey: "EmpresaId", as: "empresas"});
      Promocao.hasMany(models.Compra, {foreignKey: "PromocaoId", as: "compras"});

      Promocao.belongsToMany(models.Cartao, {
        foreignKey: "CartaoId",
        through: "Compra", as: "promocao_compra"
      });

      /*  Pedido.belongsToMany(models.Servico,{
        foreignKey: "ServicoId", 
        through: "ItemPedido", as: "servicos_ped"
      });
      Pedido.hasMany(models.ItemPedido, {foreignKey: "PedidoId", as: "item_pedidos"}); */
    }
  }
  Promocao.init({
    EmpresaId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    validade: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Promocao',
  });
  return Promocao;
};