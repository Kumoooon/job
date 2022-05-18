const postsList = document.querySelector(".list");
const url = "http://localhost:3000/employees";
const searchAreaText = document.getElementById("searchArea");
let output = "";

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     const firteringData = console.log(...data);
//   });

function nullOrNot() {
  if (searchAreaText.value == "") {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        renderPosts(data);
      });
    const renderPosts = (posts) => {
      posts.forEach((post) => {
        output += `<div class="employee" id="edit-post" data-id=${post.id} data-fn=${post.firstname} data-ln=${post.lastname} data-ps=${post.position} data-an=${post.annual} data-pn=${post.phonenumber} data-em=${post.email}>${post.firstname}${post.lastname}</div>`;
      });
      postsList.innerHTML = output;
    };
  } else {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        firteringData(data);
      });

    const firteringData = (posts) => {
      const a = posts.filter((posts) => {
        console.log(posts.firstname);
        // posts.firstname.includes("호박고");
      });
      console.log(a);
    };

    //   forEach((post) => {
    //     console.log(post);

    //     output += `<div class="employee" id="edit-post" data-id=${post.id} data-fn=${post.firstname} data-ln=${post.lastname} data-ps=${post.position} data-an=${post.annual} data-pn=${post.phonenumber} data-em=${post.email}>${post.firstname}${post.lastname}</div>`;
    //   });
    //   postsList.innerHTML = output;
    // };

    // console.log(searchAreaText.value);
    // const renderPosts = (posts) => {
    //   console.log(post.firstname);
    //   const filter = posts.filter((post) => {
    //     post.firstname.includes(searchAreaText.value);
    //   });
    //   filter.forEach((post) => {
    //     output += `<div class="employee" id="edit-post" data-id=${post.id} data-fn=${post.firstname} data-ln=${post.lastname} data-ps=${post.position} data-an=${post.annual} data-pn=${post.phonenumber} data-em=${post.email}>${post.firstname}${post.lastname}</div>`;
    //   });
    //   postsList.innerHTML = output;
    // };
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     renderPosts(data);
    //   });
  }
}
nullOrNot();

searchAreaText.addEventListener("input", (e) => {
  nullOrNot();
});
