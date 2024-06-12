const $postForm = document.getElementById("new-post-form");

const $titleInput = document.getElementById("title-input");
const $contentInput = document.getElementById("content-input");

const userId = $postForm.dataset.userId;
<<<<<<< HEAD

console.log(userId);
=======
>>>>>>> parent of fb874ba (ter)

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

<<<<<<< HEAD
async function sendData(data, file) {
	try {
		const formData = new FormData();
		console.log(data);
		for (const name in data) {
			formData.append(name, data[name]);
		}
		if (file) {
			formData.append('upload', file);
		}
		const response = await fetch(FETCHURL, {
			method: 'POST',
			body: formData,
		});
		if (response.ok) console.log('successfully created post');
		window.location.href = '../posts';
	} catch (error) {
		console.log(error);
	}
}

$postForm.addEventListener('submit', (event) => {
	const file = document.getElementById('file-input').files[0];

	event.preventDefault();
	if (!userId) {
		console.log(userId);
		return;
	}
	const postDetails = {
		title: $titleInput.value,
		content: $contentInput.value,
		user_id: userId,
	};
	console.log(postDetails);
	sendData(postDetails, file);
	//submitPost(userId, postDetails);
=======
$postForm.addEventListener("submit", (event) => {
  console.log($contentInput.value);
  event.preventDefault();
  const postDetails = {
    title: $titleInput.value,
    content: $contentInput.value,
    user_id: userId,
  };
  submitPost(userId, postDetails);
>>>>>>> parent of fb874ba (ter)
});
