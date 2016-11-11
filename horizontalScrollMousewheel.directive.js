common.directive("horizontalScrollMousewheel",[function() {
    return {
        retrict : 'A',
        link:function(scope,elem,attrs){

            $(elem).mousewheel(function(e, delta) {
                this.scrollLeft -= (delta * 40);
                e.preventDefault();
            });

        }
    }
}])
