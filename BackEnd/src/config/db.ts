import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nombre_base_datos', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, 
});

export default sequelize;