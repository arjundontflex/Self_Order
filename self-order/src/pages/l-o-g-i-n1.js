import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./l-o-g-i-n1.module.css";
const LOGIN1 = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/login2");
  }, [navigate]);

  return (
    <div className={styles.login1}>
      <div className={styles.login1Child} />
      <b className={styles.enterMobileNumber}>Enter mobile number.</b>
      <img className={styles.login1Item} alt="" src="/line-1.svg" />
      <div className={styles.login1Inner} />
      <b className={styles.typeYourMobile}>type your mobile number here...</b>
      <div className={styles.lineDiv} />
      <b className={styles.b}>+91</b>
      <img
        className={styles.flagOfIndia1Icon}
        alt=""
        src="/flag-of-india-1@2x.png"
      />
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
        <b className={styles.b1}> </b>
        <b className={styles.n1}>N</b>
        <b className={styles.a2}>A</b>
        <b className={styles.m}>M</b>
        <b className={styles.e1}>E</b>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.login1Child1} onClick={onRectangle3Click} />
      <div className={styles.getOtp}>GET OTP</div>
    </div>
  );
};

export default LOGIN1;
