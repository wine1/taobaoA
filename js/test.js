$.ajax({
    url: 'http://test.com',
    type: 'get',
    dataType: 'json'
}).done(function(data, status, xhr) {
    console.log(JSON.stringify(data, null, 4));
});