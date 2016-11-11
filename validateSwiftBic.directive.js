common.directive('validateSwiftBic',[function () {
    return{
        restrict: 'A',
        require : 'ngModel',
        link : function (scope,elem,attr,ctrl) {
            var pattern = /^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$/;

            var regex =  new RegExp(pattern);

            ctrl.$parsers.unshift(function(value)
            {
                var test = regex.test(value);
                console.log(test);

                ctrl.$setValidity('validateSwiftBic',test);

                return test? value: "";
            });
            ctrl.$formatters.unshift(function(value)
            {
                var test = regex.test(value);

                ctrl.$setValidity('validateSwiftBic',test);

                return test? value: "";
            })


        }
    }
}])
