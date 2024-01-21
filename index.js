async function getdata() {
    const response = await fetch("https://dummyjson.com/products");
    const posts = await response.json();
    console.log(posts);
    const result = posts.products.map(function (ele) {
        return `
        <div>
        <h1>${ele.id}</h2>
            <h2>${ele.title}</h2>
            <h3>${ele.price}</h2>
            <img src="${ele.thumbnail}"></img>
            </div>
        `
        
        ;
    }).join('');

    document.querySelector(".resltdat0").innerHTML = result;
}
getdata();