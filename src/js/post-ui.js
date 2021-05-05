const SAMPLE_POSTS = [
  {
    text: "The free soul is rare, but you know it when you see it - basically because you feel good, very good, when you are near or with them.",
    image: "./images/IMG_6267.JPG",
    date: "April 29, 2021",
  },
  {
    text: "The free soul is rare, but you know it when you see it - basically because you feel good, very good, when you are near or with them.",
    image: "./images/ombrepark.JPG",
    date: "April 29, 2021",
  },
  {
    text: "The free soul is rare, but you know it when you see it - basically because you feel good, very good, when you are near or with them.",
    image: "./images/testimage.jpg",
    date: "April 30, 2021",
  },
];
class Post {
  constructor(date, image, text) {
    this.image = image;
    this.text = text;
    this.date = date;
  }
}

// handle the UI for posts
class PostView {
  init() {
    // posts will be stored in an array of objects
    let newPosts = [...SAMPLE_POSTS];
    newPosts.forEach((post) => this.addPostToHTML(post));
    this.form = document.getElementById("form");
    if (this.form) {
      this.form.addEventListener("submit", e => this.handleSubmit(e));
    } 
  }

  addPostToHTML(post) {
    const postSection = document.querySelector(".posts");
    const div = document.createElement("div");
    div.className = "post-item";
    const img = document.createElement("img");
    img.className = "post-image";

    if (post.image) {
      img.src = post.image;
      img.alt = post.text;
    }
    const textDiv = document.createElement("div");
    textDiv.className = "post-text";
    textDiv.innerHTML = `
      <p class="date">${post.date}</p>
      <div class="separator"></div>  
      <p class="post-info">${post.text}</p> 
    `;
    div.appendChild(img);
    div.appendChild(textDiv);

    postSection.appendChild(div);
  }

  handleFiles(imageSrc) {
    const errorMessage = document.getElementById("error-text");
    if (!imageSrc.files.length) {
      return (imageSrc = null);
    } else if (
      imageSrc.files[0].type != "image/jpeg" &&
      imageSrc.files[0].type != "image/png" &&
      imageSrc.files[0].type != "image/gif"
    ) {
      errorMessage.classList.add("show");
    } else {
      let newImageSrc = URL.createObjectURL(imageSrc.files[0]);
      return newImageSrc;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let inputText = document.getElementById("post-text").value;
    const imageInput = document.getElementById("image-input");
    let newDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };

    if (imageInput || inputText) {
      let dateFormat = new Intl.DateTimeFormat("en-US", options).format(
        newDate
      );
      console.log(this);
      const newPost = new Post(
        dateFormat,
        this.handleFiles(imageInput),
        inputText
      );
      this.addPostToHTML(newPost);
    }
    this.form.reset();
  }
}

export class PostUI {
  constructor() {
    this.view = new PostView();
  }

  init() {
    // explain constructor versus init
    window.addEventListener("DOMContentLoaded", this.view.init());
  
  }
}
