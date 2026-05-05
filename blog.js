const posts = {
    post1: {
        title: "Overcoming Challenges",
        content: "Life is full of challenges, but each one teaches us strength and resilience..."
    },
    post2: {
        title: "Learning French Journey",
        content: "Learning French can be exciting. Start with simple words and practice daily..."
    }
};

function openPost(postId) {
    document.getElementById("post-title").innerText = posts[postId].title;
    document.getElementById("post-content").innerText = posts[postId].content;

    document.getElementById("blog").style.display = "none";
    document.getElementById("post-view").classList.remove("hidden");
}

function closePost() {
    document.getElementById("blog").style.display = "block";
    document.getElementById("post-view").classList.add("hidden");
}

