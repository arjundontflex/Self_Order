import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./h-o-m-e.module.css";
const HOME = () => {
  const navigate = useNavigate();

  const onFriedMashedPotatoBallsDinnImageClick = useCallback(() => {
    navigate("/starters");
  }, [navigate]);

  const onBev1ImageClick = useCallback(() => {
    navigate("/bevereges");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <div className={styles.homeInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.homeChild1} />
      <img className={styles.offer1Icon} alt="" src="/offer-1@2x.png" />
      <div className={styles.homeChild2} />
      <img
        className={styles.restaurantLogoWithChefDrawIcon}
        alt=""
        src="/restaurantlogowithchefdrawingtemplateontransparentbackgroundpng-1@2x.png"
      />
      <div className={styles.frame}>
        <b className={styles.r}>R</b>
        <b className={styles.e}>E</b>
        <b className={styles.s}>S</b>
        <b className={styles.t}>T</b>
        <b className={styles.a}>A</b>
        <b className={styles.u}>U</b>
        <b className={styles.r1}>R</b>
        <b className={styles.a1}>A</b>
        <b className={styles.n}>N</b>
        <b className={styles.t1}>T</b>
        <b className={styles.b}> </b>
        <b className={styles.n1}>N</b>
        <b className={styles.a2}>A</b>
        <b className={styles.m}>M</b>
        <b className={styles.e1}>E</b>
      </div>
      <div className={styles.lineDiv} />
      <b className={styles.offers}>Offers</b>
      <b className={styles.beverages}>Beverages</b>
      <b className={styles.desserts}>Desserts</b>
      <b className={styles.mainCourse}>Main Course</b>
      <b className={styles.snacks}>Snacks</b>
      <b className={styles.starters}>Starters</b>
      <img
        className={styles.friedMashedPotatoBallsDinnIcon}
        alt=""
        src="/friedmashedpotatoballsdinnerpartystarters1627381185-1@2x.png"
        onClick={onFriedMashedPotatoBallsDinnImageClick}
      />
      <img
        className={styles.samosaRecipe1Icon}
        alt=""
        src="/samosarecipe-1@2x.png"
      />
      <img
        className={styles.indianLunchDinnerMainCoursIcon}
        alt=""
        src="/110071401indianlunchdinnermaincoursefoodingroupincludespaneerbuttermasaladalmakhanipalak-1@2x.png"
      />
      <img className={styles.dess1Icon} alt="" src="/dess-1@2x.png" />
      <img
        className={styles.bev1Icon}
        alt=""
        src="/bev-1@2x.png"
        onClick={onBev1ImageClick}
      />
      <div className={styles.homeChild3} />
      <div className={styles.homeChild4} />
    </div>
  );
};

export default HOME;
