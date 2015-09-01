filters.filter('startFrom', function() {
    return function(input, start) {
        if(input == undefined){
            return false;
        }

        start = +start; //parse to int

        return input.slice(start);
    }
});