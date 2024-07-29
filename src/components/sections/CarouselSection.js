import { useState } from "react";
import { NextButton, PrevButton } from "../../assets";
import { Carousel } from "../Carousel";
import { CarouselDatas } from "../../constants";
import { Badge } from "../Badge";

const styles = {
  section: "w-full m-auto flex flex-col gap-3 overflow-hidden",
  sliderContainer: "flex transition-transform duration-500 ease-out rounded-xl",
  buttonContainer: "flex justify-end gap-2 max-w-[1216px]",
};

export const CarouselSection = ({ articles, carouselCount = 3 }) => {
  let [currentIndex, setCurrentIndex] = useState(0);

  const prevClickHandler = () =>
    setCurrentIndex(
      currentIndex === 0 ? CarouselDatas.length - 1 : currentIndex - 1
    );
  const nextClickHandler = () =>
    setCurrentIndex(
      currentIndex === CarouselDatas.length - 1 ? 0 : currentIndex + 1
    );

  return (
    <div className={styles.section}>
      <div
        className={styles.sliderContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.slice(0, carouselCount).map((article, index) => {
          return (
            <Carousel
              key={index}
              imageUrl={article.social_image}
              badge={article.tag_list.map((tag, index) => {
                return <Badge badgeName={tag} key={index} isPrimary={true} />;
              })}
              title={article.title}
              date={article.readable_publish_date}
            />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={prevClickHandler}>
          <PrevButton />
        </button>
        <button onClick={nextClickHandler}>
          <NextButton />
        </button>
      </div>
    </div>
  );
};
