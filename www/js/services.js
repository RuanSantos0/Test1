angular.module('app.services', [])

//Aqui é pra nomear o serviço. Esse abaixo será o Serviço Dono
.service('DonoService',['$http', function($http){

  var api_url = 'https://sheetsu.com/apis/v1.0/8d92f5e7dd6e';
  var currentID = 1;

  var ret = {
        all: function(){

            return $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            });

        },
        add: function(data){
            currentID++;
            data.id = currentID;

            return $http.post(api_url, data).then(function(resp){
                return resp.data;
            });

        },
        delete: function(id){
          return $http.delete(api_url+'/id/'+id);
        }
    }

     ret.all();

     return ret;

}])

//Aqui é pra nomear o serviço. Esse abaixo será o Serviço Pet
.service('PetService',['$http', function($http){

    var api_url2 = 'https://sheetsu.com/apis/v1.0/bdb44fb9f81c';
    var currentID = 1;

    var ret2 = {
      //Esse metodos aqui ALL  é que vai trazer todos os registros já cadastrados
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


}])

.service('VisitaService',['$http', function($http){

  var api_url3 = 'https://sheetsu.com/apis/v1.0/d438a87351c8';
  var currentID = 1;

  var ret3 = {
        all: function(){

            return $http.get(api_url3).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            });

        },
        add: function(data){
            currentID++;
            data.id = currentID;

            return $http.post(api_url3, data).then(function(resp){
                return resp.data;
            });

        }
    }

     ret3.all();

     return ret3;

}])

.service('RacaService',['$http', function($http){

  var api_url = 'https://sheetsu.com/apis/v1.0/9eddcb0ee30f';
  var currentID = 1;

  var ret = {
        pegaRacas: function(){

            return $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            });

        }
       
  }

  ret.pegaRacas();

  return ret;

}]);
