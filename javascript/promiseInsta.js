async function likeCode(){
    return new Promise((likePosted)=>{
        likePosted("like posted successfully in the post")
    })
}

async function commentCode(){
    return new Promise((commentPosted)=>{
        commentPosted("Comment posted successfully in the post")
    })
}

async function createPost(){
    var post=new Promise((cPost)=>{
        cPost("Post Created Successfully")
    })
    var[posts,comment,like]=await Promise.all([post,commentCode(),likeCode()] )
    console.log(posts);
    console.log(comment);
    console.log(like);
}
createPost()