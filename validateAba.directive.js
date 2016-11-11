
common.directive('validateAba',[function(){
    return{
        restrict: 'A',
        require : 'ngModel',
        link : function (scope,elem,attr,ctrl) {

            var isAba = function (t) {
                n = 0;
                for (i = 0; i < t.length; i += 3) {
                    n += parseInt(t.charAt(i),     10) * 3
                        +  parseInt(t.charAt(i + 1), 10) * 7
                        +  parseInt(t.charAt(i + 2), 10);
                }

                // If the resulting sum is an even multiple of ten (but not zero),
                // the aba routing number is good.

                if (n != 0 && n % 10 == 0)
                    return true;
                else
                    return false;

            };

            ctrl.$parsers.unshift(function(value)
            {
                var test =  false;
                if(value != null && angular.isDefined(value))
                {

                    test = isAba(value);
                    console.log(test);

                    ctrl.$setValidity('validateAba',test);
                }
                return test? value: "";
            });
            ctrl.$formatters.unshift(function(value)
            {
                var test =  false;
                if(value != null && angular.isDefined(value))
                {

                    test = isAba(value);
                    console.log(test);

                    ctrl.$setValidity('validateAba',test);
                }
                return test? value: "";
            })


        }
    }
}]);
