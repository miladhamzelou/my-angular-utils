
common.directive('validateIp',[function(){
    return{
        restrict : 'A',
        require : 'ngModel',
        link : function(scope,elem,attr,ctrl)
        {
            ctrl.$parsers.unshift(function(value)
            {
                var pattern  = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
                var ipregex = new RegExp(pattern);
                if(value != null && angular.isDefined(value))
                {

                    var  test = ipregex.test(value);
                    console.log(test);
                    ctrl.$setValidity('validateIpAddress',test);
                }
                if(value == '')
                {
                    ctrl.$setValidity('validateIpAddress',true);
                }
                return value;
            });
            ctrl.$formatters.unshift(function(value)
            {
                var pattern  = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm;
                var ipregex = new RegExp(pattern);
                if(value != null && angular.isDefined(value))
                {

                    var test = ipregex.test(value);
                    console.log(test);
                    ctrl.$setValidity('validateIpAddress',test);
                }
                if(value == '')
                {
                    ctrl.$setValidity('validateIpAddress',true);
                }
                return value;
            });
        }
    }

}]);
