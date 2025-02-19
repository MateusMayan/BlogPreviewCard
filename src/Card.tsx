import blogImage from "./assets/illustration-article.svg";
import avatarImage from "./assets/image-avatar.webp";

const Card = () => {
  return (
    <div className="box">
      <div id="blogImage">
        <img src={blogImage} alt="Blog illustration" />
      </div>
      <div id="content">
        <span className="category text-preset-4">Learning</span>
        <p className="text-preset-3">Published 21 Dec 2023</p>
        <h4 className="text-preset-1">HTML & CSS foundations</h4>
        <p className="text-preset-2">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div id="author">
        <img src={avatarImage} alt="User Avatar" />
        <h6 className="text-preset-4">Greg Hooper</h6>
      </div>
    </div>
  );
};

export default Card;
