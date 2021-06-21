'use strict';
// see https://github.com/pouchdb/plugin-seed  for details
// see https://github.com/pouchdb/upsert/blob/master/index.js 
// see https://github.com/pouchdb/pouchdb/tree/master/packages/node_modules/pouchdb-utils 
// see https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-http/src/index.js

exports.findOne = function (idOrSelector, opts = {}, callback) {
  //
  // You can use the following code to
  // get the pouch or PouchDB objects
  //
  // var pouch = this;
  // var PouchDB = pouch.constructor;
  var selector;

  if(typeof idOrSelector === 'object'){
    selector = idOrSelector;
  }else if ((typeof idOrSelector === 'string')){
    selector = {
      _id: idOrSelector
    };
  }
  return this.find({
    selector
  }).then((res) => {
    if(typeof callback === 'function'){
      callback(null, res)
    }
    if (res.docs.length){
      return res.docs[0];
    }else {
      return null;
    }
  });

};

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.PouchDB) {
  window.PouchDB.plugin(exports);
}