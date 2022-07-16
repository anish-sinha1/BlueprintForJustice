import React from "react";

import WandaJohnson from "assets/wanda-johnson-img-asset.png";
import Mother from "assets/mothers-story.png";

interface StoryAttrs {
  imgSrc: string;
  imgAlt?: string;
  story: string;
  storyTitle: string;
}

const BlueprintInAction = () => {
  const mainStories: StoryAttrs[] = [
    {
      imgSrc: WandaJohnson,
      imgAlt: "Wanda Johnson's story",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet nihil voluptatibus omnis culpa deleniti exercitationem. Labore perspiciatis deserunt eaque voluptates assumenda ipsum, accusamus est quos, adipisci, fugiat corporis ea!",
      storyTitle: "Wanda Johnson's story",
    },
    {
      imgSrc: Mother,
      imgAlt: "Mother's Story",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet nihil voluptatibus omnis culpa deleniti exercitationem. Labore perspiciatis deserunt eaque voluptates assumenda ipsum, accusamus est quos, adipisci, fugiat corporis ea!",
      storyTitle: "Mother's story",
    },
  ];

  const storyHtml = mainStories.map((storyInfo: StoryAttrs, index) =>
    index % 2 === 0 ? (
      <div key={index} className="story-element">
        <img
          src={storyInfo.imgSrc}
          alt={storyInfo.imgAlt !== "" ? storyInfo.imgAlt : "story"}
          className="story-element__img"
        ></img>
        <div className="story-element__text">
          <h4>{storyInfo.storyTitle}</h4>
          {storyInfo.story}
        </div>
      </div>
    ) : (
      <div key={index} className="story-element">
        <div className="story-element__text">
          <h4>{storyInfo.storyTitle}</h4>
          {storyInfo.story}
        </div>
        <img
          src={storyInfo.imgSrc}
          alt={storyInfo.imgAlt !== "" ? storyInfo.imgAlt : "story"}
          className="story-element__img"
        ></img>
      </div>
    )
  );
  return (
    <>
      <div className="app-blueprint">
        <div className="app-blueprint__header">
          <h2>Blueprint in Action</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            delectus quis modi eaque libero ex magnam autem laborum, ab
            molestias, laboriosam, earum voluptatibus beatae? Eveniet saepe
            aliquam vel possimus fugit.
          </p>
        </div>
        <div className="app-blueprint__stories">{storyHtml}</div>
      </div>
    </>
  );
};

export default BlueprintInAction;
