var search = location.search.substring(1);
var query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
console.log(query);
$.ajax({
    type: 'GET',
    url: query.url + ".json",
    success: function (success){
        var title = success[0].data.children[0].data.title;
        $("#posts").append(title);
        var pic = success[0].data.children[0].data.url
        var img = document.createElement('img');
        img.src = success[0].data.children[0].data.url
        $("#posts").append(img);
    }
})