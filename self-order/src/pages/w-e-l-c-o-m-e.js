import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./w-e-l-c-o-m-e.module.css";
const WELCOME = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.welcome}>
      <img className={styles.welcomeChild} alt="" src="/line-11.svg" />
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
      <div className={styles.welcomeItem} />
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
      <div className={styles.welcomeInner} />
      <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
      <div className={styles.getStarted}>GET STARTED</div>
      <b className={styles.welcomeToRestrauntContainer}>
        <span>{`        `}</span>
        <span className={styles.welcome1}>Welcome</span>
        <span> to *Restraunt Name*.</span>
      </b>
      <b className={styles.hungry}>HUNGRY?</b>
    </div>
  );
};

export default WELCOME;
