import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./s-t-a-r-t-e-r-s.module.css";
const STARTERS = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.starters}>
      <img
        className={styles.restaurantLogoWithChefDrawIcon}
        alt=""
        src="/restaurantlogowithchefdrawingtemplateontransparentbackgroundpng-3@2x.png"
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
      <div className={styles.startersChild} />
      <div className={styles.startersInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
        </div>
      </div>
      <b className={styles.hungryOrderNow}>Hungry? Order now!</b>
      <div className={styles.startersItem} onClick={onRectangle3Click} />
      <b className={styles.goBack}>Go Back</b>
      <div className={styles.ellipseDiv} />
      <img className={styles.pngegg1Icon} alt="" src="/pngegg-1@2x.png" />
    </div>
  );
};

export default STARTERS;
