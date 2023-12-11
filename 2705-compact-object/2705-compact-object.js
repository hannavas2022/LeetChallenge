/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
   if(Array.isArray(obj)) {
       return obj.filter(value => Boolean(value)).map(value => compactObject(value))
   } else {
       if (typeof obj === 'object' && obj !== null){
           let newObj = {}
           for (let key in obj){
               if(Boolean(obj[key])){
                   newObj[key] = compactObject(obj[key])
               }
           }
           return newObj
       } else {
           return obj
       }
   }
};