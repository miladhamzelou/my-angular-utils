common.directive('stringToDate', [function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) {
                if(value)
                {
                    return new Date(value);
                }
                return '';
            });
            ngModel.$formatters.push(function(value) {
                if(value)
                {
                    return new Date(value);
                }
                return '';
            });
        }
    };
}]);
