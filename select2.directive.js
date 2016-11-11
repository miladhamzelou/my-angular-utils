common.directive("select2",['$timeout', '$parse', function($timeout, $parse) {
    return {
        restrict: 'AC',
        require: 'ngModel',
        link: function(scope, element, attrs) {
            console.log(attrs);
            $timeout(function() {
              if(element.length > 0)
              {
                element.select2();
                element.select2Initialized = true;
              }

            });

            var refreshSelect = function() {
                if (!element.select2Initialized) return;
                $timeout(function() {
                    element.trigger('change');
                });
            };

            var recreateSelect = function () {
                if (!element.select2Initialized) return;
                $timeout(function() {
                    element.select2('destroy');
                    element.select2();
                });
            };
            element.on('select2:select', function(){
                var attrValue = $parse(attrs.onselect);
                (typeof attrValue === 'function') ? attrValue(scope) : angular.noop();
                scope.$apply();
            });
            scope.$watch(attrs.ngModel, refreshSelect);

            element.on('select2:close', function (evt) {
                /* var uldiv = $(this).siblings('span.select2').find('ul')
                 var count = $(this).select2('data').length
                 if (count == 0) {
                 uldiv.html("")
                 }
                 else {
                 uldiv.html("<li>" + count + " items selected</li>")
                 }*/
            });
            if (attrs.ngOptions) {
                var list = attrs.ngOptions.match(/ in ([^ ]*)/)[1];
                // watch for option list change
                scope.$watch(list, recreateSelect);
            }

            if (attrs.ngDisabled) {
                scope.$watch(attrs.ngDisabled, refreshSelect);
            }
        }
    };
}]);
