common.directive('stringToNumber',[ function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {

            ngModel.$parsers.push(function(value) {
                if(typeof value === 'string')
                {
                    return parseFloat(value);
                }

                return value;
            });

            ngModel.$formatters.push(function(value) {
                if(typeof value === 'string')
                {
                    return parseFloat(value);
                }
                return value;
            });

        }
    };
}]);
