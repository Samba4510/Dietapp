//post and comment analysis
const post = {
        postid:"tva123",
        postdescription: "this is a post",
        posttitle: "Football",
        postcomments:[
            
        ]
}
for(let post1 in post)
{
    console.log(post[post1]);
}
console.log("\n");
console.log(post.postcomments);
