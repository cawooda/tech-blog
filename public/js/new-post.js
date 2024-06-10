const $postForm = document.getElementById("new-post-form");

const $titleInput = document.getElementById("title-input");
const $contentInput = document.getElementById("content-input");

const userId = $postForm.dataset.userId;

const FETCHURL = "/api/posts";

const submitPost = async (userId, postDetails) => {
  try {
    const response = await fetch(FETCHURL, {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDetails),
    });
    if (response.ok) console.log("successfully created post");
    window.location.href = "../posts";
  } catch (error) {
    console.error(error);
  }
};

$postForm.addEventListener("submit", (event) => {
  console.log($contentInput.value);
  event.preventDefault();
  const postDetails = {
    title: $titleInput.value,
    content: $contentInput.value,
    user_id: userId,
  };
  submitPost(userId, postDetails);
});
