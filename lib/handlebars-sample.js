const path = require('path');
const MODULE_NAME = path.basename(__filename,'.js');
const debug = require('debug')(MODULE_NAME);
const config = require('config');
const cson = require('cson');
const Handlebars = require('handlebars');
const _ = require('lodash')

const execute = (id,obj) => {
  const source = config[id];
  // debug(source);
  const template = Handlebars.compile(source);
  let retStr = template(obj);
  return retStr;
}

const createList = (items,options) => {
  const UL_TAG = "<ul>";
  const UL_TAGC = "</ul>";
  const LI_TAG = "<li>";
  const LI_TAGC = "</li>";
  let retStr = '';
  _.each(items,(elm,idx,array) => {
    retStr = retStr + + '\t' + LI_TAG + elm + LI_TAGC + '\n';
  });
  retStr = UL_TAG + '\n' + retStr + UL_TAGC;
  return retStr;
}
Handlebars.registerHelper('list',createList);

// entry point
const main = () => {
  debug('>> Start main');
  const obj = {
    name : 'Sakai.Memoru',
    age  : 51
  };
  const output = execute('template',obj);
  debug(output);
  debug('<< End   main');
}

const testCreateList = () =>{
  debug('>> Start testCreateList');
  const out = createList(['Sakai','Memoru','Senda']);
  debug(out);
  debug('<< End   testCreateList');
}
module.exports.main = main;
module.exports.execute = execute;

// debug ---------------------
// ---------------------------
if(require.main === module){
  // debug execution
  // main();
  testCreateList();
}
