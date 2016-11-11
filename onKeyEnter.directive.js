common.directive('onKeyEnter', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('keypress', function(event) {
                if (event.which === 13) {

                    var attrValue = $parse(attrs.onKeyEnter);

                    (typeof attrValue === 'function') ? attrValue(scope) : angular.noop();
                    scope.$apply();
                    event.preventDefault();

                }
            });
            scope.$on('$destroy', function() {
                element.unbind('keypress')
            })
        }
    };
}]);
