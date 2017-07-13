// var url = location.search.substring(1).split('=')[1]+'.json';
$.ajax({
    type: 'GET',
    url: "https://www.reddit.com/r/funny.json",
    success: function (success) {
        console.log(success);
    
        var posts = success.data.children;
        for (var i = 0; i < posts.length; i++) {
            var header = document.createElement("h3");
            document.body.appendChild(header);
            var div = document.createElement("div");
            var pic = document.createElement('img');
            pic.src = posts[i].data.thumbnail;
            div.appendChild(pic);
            document.body.appendChild(div);
            var a = document.createElement("a");
            a.setAttribute('href','single.html?url=https://www.reddit.com' + posts[i].data.permalink)
            a.innerText = posts[i].data.title;
            header.append(a);
        }
    }
})



