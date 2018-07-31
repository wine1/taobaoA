var Mock = require('mockjs');
var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1,
        'name': '@name()',
        'age|1-100': 1,
        'color': '@color',
        'image': '@image'
    }]
})
console.log(JSON.stringify(data, null, 4))
var data1 = Mock.mock("http://rich.cn", {
    "name": "@name",
    "isTrue|1": true,
    "color": "@color"
})
$.ajax({
    url: 'http://rich.cn',
    success: function (e) {
        console.info(e)
    }
})