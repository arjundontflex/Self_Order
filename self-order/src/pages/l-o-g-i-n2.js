import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./l-o-g-i-n2.module.css";
const LOGIN2 = () => {
  const navigate = useNavigate();

  const onRectangle7Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.login2}>
      <b className={styles.enterTheOtp}>Enter the OTP sent to your number.</b>
      <img className={styles.login2Child} alt="" src="/line-12.svg" />
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
      <div className={styles.login2Item} />
      <div className={styles.login2Inner} />
      <div className={styles.rectangleDiv} />
      <b className={styles.typeYourOtp}>type your OTP here...</b>
      <div className={styles.login2Child1} />
      <div className={styles.login}>LOGIN</div>
      <b className={styles.enterTheOtp}>Enter the OTP sent to your number.</b>
      <img className={styles.login2Child} alt="" src="/line-12.svg" />
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
      <div className={styles.login2Item} />
      <div className={styles.login2Inner} />
      <div className={styles.rectangleDiv} />
      <b className={styles.typeYourOtp}>type your OTP here...</b>
      <div className={styles.login2Child5} onClick={onRectangle7Click} />
      <div className={styles.login}>LOGIN</div>
    </div>
  );
};

export default LOGIN2;
