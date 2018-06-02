import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import config from '../../config/config';

const db = {};

// connect to GYAN Database
const sequelize = new Sequelize(
  config.gyan.db,
  config.gyan.user,
  config.gyan.pwd, {
    dialect: 'mysql',
    host: config.gyan.host,
    port: config.gyan.port
  }
);
//sequelize.sync();
const basename = path.basename(module.filename);
const modelsDir = path.normalize(`${__dirname}/../models`);

// loop through all files in models directory ignoring hidden files and this file
fs.readdirSync(modelsDir)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  // import model files and save model names
  .forEach((file) => {
    const model = sequelize.import(path.join(modelsDir, file));
    db[model.name] = model;
  });

// assign the sequelize variables to the db object and returning the db.
module.exports = _.extend({
  sequelize,
  Sequelize,
}, db);
