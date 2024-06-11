const $postForm = document.getElementById('edit-post-form');
console.log($postForm);
const $titleInput = document.getElementById('title-input');
const $contentInput = document.getElementById('content-input');
const postId = $postForm.dataset.postId;

const FETCHURL = `/api/posts/edit/${postId}`;
console.log('fetch url', FETCHURL);

async function sendData(data, file) {
	try {
		const formData = new FormData();

		for (const name in data) {
			formData.append(name, data[name]);
		}
		if (file) {
			formData.append('upload', file);
		}
		const response = await fetch(FETCHURL, {
			method: 'PUT',
			body: formData,
		});
		if (response.ok) console.log('successfully updated post');
		window.location.href = '../';
	} catch (error) {
		console.log(error);
	}
}

$postForm.addEventListener('submit', (event) => {
	const file = document.getElementById('file-input').files[0];
	const userId = $postForm.dataset.userId;
	console.log(userId);
	event.preventDefault();

	const postDetails = {
		id: postId,
		title: $titleInput.value,
		content: $contentInput.value,
		user_id: userId,
	};

	sendData(postDetails, file);
	//submitPost(userId, postDetails);
});
