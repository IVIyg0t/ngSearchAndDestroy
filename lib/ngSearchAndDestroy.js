angular.module('ngSearchAndDestroy',[]).directive('ngSearch', function(){
    return {
        restrict: 'E',
        scope: {
            apiUrl: '=api',
            inData: '=inData',
            outData: '=outData',
            ext: '=ext'
        },
        controller: function($scope){
            $scope.listData = [];
            angular.copy($scope.inData, $scope.listData);
            $scope.searchQuery = '';
            $scope.showPopup = false;

            $scope.textClick = function() {
                $scope.showPopup = !$scope.showPopup;
            };

            $scope.itemClicked = function(item) {
              $scope.searchQuery = item[$scope.ext];
              $scope.outData = item;
              $scope.showPopup = false;  
            };

            $scope.keyUp = function(query) {
                $scope.listData = [];
                angular.forEach($scope.inData, function(data){
                    if( data[$scope.ext].toLowerCase().indexOf(query) >= 0 ){
                        $scope.listData.push(data);
                    }
                });
            };
        },
        templateUrl: 'ngSearch.html'
    };
});