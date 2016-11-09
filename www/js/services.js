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

    var api_url2 = 'https://sheetsu.com/apis/v1.0/d0b2ee87692b';
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

       },

       edit: function(data){
          //Aqui é um detalhe específico do Sheetsu, onde ele pede que pra editar, use o método PUT, repassando a api_url/id/

           return $http.put(api_url2+'/id/'+data.id, data).then(function(resp){
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

  //var api_url = 'https://sheetsu.com/apis/v1.0/9eddcb0ee30f';
  var api_url ='';
  var currentID = 1;

  var ret = {
        pegaRacas: function(){

            return $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            })

        }

  }

  ret.pegaRacas();

  return ret;

}])

.service('RacaServiceLocal', function(){

    //Lista de Racas que é carregada ao iniciar a aplicação
    racasList = [
              { id: 1, Nome: 'Raça1'},
              { id: 2, Nome: 'Raça2'},
              { id: 3, Nome: 'Raça3'},
              { id: 4, Nome: 'Raça4'},
              { id: 5, Nome: 'Raça5'},
    ];
    

    return {
        getRacas: function() {
            return racasList;
        }
    };
    

})


.service('PetServiceLocal',['$q',function($q){

  //Lista de Pets que é carregada ao iniciar a aplicação
   petsList = [
              { id: 1, nomePet: 'Peter', dataNascimento: '01/01/2001', raca_id:1 },
              { id: 2, nomePet: 'Lois', dataNascimento: '02/02/2002', raca_id:2 },
              { id: 3, nomePet: 'Meg', dataNascimento: '03/03/2003', raca_id:3 },
              { id: 4, nomePet: 'Chris', dataNascimento: '04/04/2004', raca_id:4 },
              { id: 5, nomePet: 'Stewie', dataNascimento: '05/05/2005', raca_id:5 }
   ];

   //retorna o ultimo id cadastrado
   function getLastID () {
        var temp = petsList;

        temp.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          
        });

        return temp[temp.length -1].id
   }

   return {

        //adiciona um Pet
        addPet: function (pet) {
          //verifica qual é o ultimo ID e incrementa
          var newID = getLastID() +1;
          pet.id = newID;
          //salva o pet na PetList
          petsList.push(pet);

        },

        //Retorna a lista de Pets
        getPets: function() {
            return petsList;
        },

        //Retorna somente um Pet
        getPet: function (id) {
            
            for (var i = 0; i < petsList.length; i++) {
                if (petsList[i].id == id) {
                return(petsList[i]);
                }
            }
            return '{}';
        },

        //Atualiza um pet
        update: function(pet){
          for(var i=0; i<petsList.length; i++){
            if(petsList[i].id == pet.id){
                petsList[i] = pet;
                
            }
          }
        }


    };
    

}]);
