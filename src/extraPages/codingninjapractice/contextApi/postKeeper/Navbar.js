import { useState } from "react";
import { usePostsValue } from "./postContext";
import Styles from './PostKeeper.module.css'
export const Navbar = () => {
  const [showSavedList, setShowSavedList] = useState(false);
  const { savedPosts, resetPosts } = usePostsValue();

  return (
    <div className={Styles.navbar}>
      <span onClick={() => setShowSavedList(!showSavedList)}>
        Saved Posts: {savedPosts.length}
      </span>
      {showSavedList && (
        <div className={Styles.saved_list}>
          {savedPosts.map((p) => (
            <div className={Styles.saved_post} key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      <button onClick={resetPosts}>Reset</button>
    </div>
  );
};
