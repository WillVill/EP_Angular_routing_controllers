var app = angular.module('app',['ngRoute'])
    app.service('service',function(){
        var person = {};
        
        this.setPerson = function(p){
            console.log("fuck");
            person = p;        
        };
        
        this.getPerson = function(){
                        console.log("2fuck");
            return person;
        };
    });
    
        app.config(function($routeProvider){
            $routeProvider
            .when('/template1',{
                templateUrl:'template1.html',
                controller:'controller'
            })
            .when('/template2',{
                templateUrl: 'template2.html',
                controller:'controller2'
            });
        })
        
        app.controller('mainController',['$scope',function($scope){
                
        }])
    
        app.controller('controller',['$scope','$http','service',function($scope, $http, service){
                $scope.service = function(d){
                    service.setPerson(d);
                };
                $http.get('data/data.json')
                .success(function(data){
                    $scope.data = data.users;
                });
        }]);
    
   app.controller('controller2',['$scope','service',function($scope,service){
               $scope.person = service.getPerson();
        }]);
    

