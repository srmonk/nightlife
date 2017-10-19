    var url = "http://localhost:5820/FinalProject/query"; 
    var query = "select * where {?sub ?pred ?obj}";
    
    $.ajax({
        headers : {
            Accept: 'application/sparql-results+json'
        }, 
        url: url,
        data: {
            query: query
        },
        success: function(data) {
            var results = data.results.bindings;
            console.log(results);
        }
    });
