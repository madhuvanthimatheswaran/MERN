//if i give true it will print all statements

async function likeCode() {
    return new Promise((likePosted) => {
        likePosted("Like posted successfully in the post");
    });
}

async function commentCode() {
    return new Promise((commentPosted) => {
        commentPosted("Comment posted successfully in the post");
    });
}

async function shareCode() {
    return new Promise((sharePosted) => {
        sharePosted("Post shared successfully");
    });
}

async function unshareCode() {
    return new Promise((unsharePosted) => {
        unsharePosted("Post unshared successfully");
    });
}

async function uncommentCode() {
    return new Promise((uncommentPosted) => {
        uncommentPosted("Comment removed successfully");
    });
}

async function createPost() {
    const executeActions = false;

    if (executeActions) {
        const post = new Promise((cPost) => {
            cPost("Post created successfully");
        });
        const [posts, comment, like, share, unshare, uncomment] = await Promise.all([
            post,
            commentCode(),
            likeCode(),
            shareCode(),
            unshareCode(),
            uncommentCode(),
        ]);
        console.log(posts);
        console.log(comment);
        console.log(like);
        console.log(share);
        console.log(unshare);
        console.log(uncomment);
    } else {
        console.log("No actions executed.");
    }
}

createPost();
