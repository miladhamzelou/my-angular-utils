common.directive('csvToArray', [function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {

            ngModel.$parsers.push(function(value) {

                return '' + value;
            });
            ngModel.$formatters.push(function(value) {
                var array = [];
                if(typeof value == 'string')
                {
                    var array = value.split(',');
                    return array;
                }
                else
                {
                    return value;
                }


            });
        }
    };
}]);
