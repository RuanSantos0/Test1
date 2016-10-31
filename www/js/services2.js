angular.module('app.services', [])


.service('PetClinic',['$http', function($http){


  var api_url2 = 'https://sheetsu.com/apis/v1.0/bdb44fb9f81c';
  var currentID = 1;

  var ret2 = {
     all: function(){

         return $http.get(api_url2).then(function(resp){
             if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
             return resp.data;
         });

     },
     add: function(data){
         currentID++;
         data.id = currentID;

         return $http.post(api_url2, data).then(function(resp){
             return resp.data;
         });

     }
 }

  ret2.all();

  return ret2;

}]);
