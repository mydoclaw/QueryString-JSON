'use strict';

/**
 * queryStrinToJson
 * @param {string} stringData
 * @return {string} JsonSting equivalent of the queryparameters
 */
 
 
function queryStringToJson(stringData)
{

  var jsonString="";
  if ( typeof stringData !== 'undefined' && stringData ){
      stringData=stringData.substring(stringData.indexOf("?")+1);
      var array=stringData.split("&");
      var jsonString="";
      jsonString="{";
      for (var ele in array){
            if (ele!=0){
            jsonString=jsonString+",";
            }
            var arraysplit =array[ele].split("=");
            if(arraysplit[1].match(/^-{0,1}\d+$/)){
              //valid integer with positive or negative value 
              jsonString=jsonString+"\""+arraysplit[0]+"\":"+arraysplit[1];
            }else if(arraysplit[1].match(/^\d+\.\d+$/)){
              //valid float
                jsonString=jsonString+"\""+arraysplit[0]+"\":"+arraysplit[1];

            }else{
              //not valid number 
                jsonString=jsonString+"\""+arraysplit[0]+"\": \""+arraysplit[1]+"\"";

            }
          
      }
      jsonString=jsonString+"}";
  }
    
  return jsonString;
}

module.exports = function(stringData) {
    return queryStringToJson(stringData);
};