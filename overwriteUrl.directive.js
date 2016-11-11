common.directive('overwriteUrl', [function() {

    var url_REGEXP = /^(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

    return {
        restrict :  'A',
        require: '?ngModel',
        priority: 2,
        link: function(scope, elm, attrs, ctrl) {
            var regex = new RegExp(url_REGEXP);
            if (ctrl && ctrl.$validators.url) {
                ctrl.$validators.url = function(modelValue) {
                    var test = regex.test(modelValue);
                    return ctrl.$isEmpty(modelValue) || test;
                };
            }
        }
    };
}]);
