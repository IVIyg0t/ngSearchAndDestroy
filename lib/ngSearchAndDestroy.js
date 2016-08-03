(function() {
    'use strict';

    angular.module('ngSearchAndDestroy', [])
    .directive('ngSearch', ngSearch) 
    .directive('ngEnter', ngEnter);
    
    function ngSearch() {
        return {
            restrict: 'E',
            scope: {
                apiUrl: '=api',
                inData: '=inData',
                outData: '=outData',
                clearInput: '=clearInput',
                ext: '=ext'
            },
            controller: function ($scope) {
                $scope.listData = [];
                angular.copy($scope.inData, $scope.listData);
                $scope.searchQuery = '';
                $scope.showPopup = false;
                
                $scope.$watch('clearInput', function(newValue, oldValue){
                    if(newValue === true){
                        $scope.searchQuery = '';
                        $scope.clearInput = false;
                    }
                });

                $scope.textClick = function () {
                    //$scope.showPopup = !$scope.showPopup;
                };

                $scope.itemClicked = function (item) {
                    $scope.searchQuery = item[$scope.ext];
                    $scope.returnObj = item;
                    $scope.outData = item;
                    $scope.showPopup = false;
                    $scope.outData = $scope.returnObj;
                };

                $scope.keyUp = function (query) {
                    $scope.listData = [];
                    angular.forEach($scope.inData, function (data) {
                        if (data[$scope.ext].toLowerCase().indexOf(query) >= 0) {
                            $scope.listData.push(data);
                        }
                    });

                    if($scope.listData.length > 0 && $scope.searchQuery.length > 0){
                        $scope.showPopup = true;
                    } else {
                        $scope.showPopup = false;
                    }
                    $scope.outData = query;
                };
            },
            templateUrl: '/bower_components/ng-search-and-destroy/lib/ngSearch.html'
        };
    }

    function ngEnter() {
        console.log("ngEnter");
        return function($scope, element, attrs){
            element.bind("keydown keypress", function(event){
                if(event.which === 13) {
                    $scope.$apply(function () {
                        $scope.$eval(attrs.ngEnter, {'event': event});
                    });
                    event.preventDefault();
                }
            });
        };
    }

})();