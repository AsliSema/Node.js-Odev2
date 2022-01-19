const posts = [
    { quotes: "The journey of a thousand miles begins with one step", author: "-Lao Tzu" },
    { quotes: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success", author: "-James Cameron" },
    { quotes: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma-which is living with the results of other people's thinking.", author: "-Steve Jobs" },
    { quotes: "Whether you think you can do or you think you can't, you're right.", author: "-Henry Ford" }
];


const listPost = () => {
    posts.map(post => {
        console.log(post.quotes + " " + post.author)
    })
};

const addPost = (lastPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(lastPost);
        resolve(posts);
        reject("The post couldn't be added to the list.");
    })

    return promise1;

}

async function newPosts() {
    try {
        await addPost({ quotes: "Tell me and I forget.Teach me and I remember. Involve me and I learn", author: "-Benjamin Franklin" });
        listPost();
    } catch (err) {
        console.log(err)
    }
}

newPosts();