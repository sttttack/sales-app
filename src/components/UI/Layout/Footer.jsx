import CarLogo from "../../../assets/car.png";
import Icon1 from "../../../assets/icon1.png";
import Icon2 from "../../../assets/icon2.png";

import ContactTab from "../ContactTab";

import classes from "../Layout/Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={classes.footer}>
      <div className={classes.sectionOne}>
        <div>
          <div className={classes.logo}>
            <img src={CarLogo} className={classes.logo} />
            <h1>Mobile</h1>
          </div>
          <h5>Best dealer in the US</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
        <div className={classes.socialMedia}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            cursor={"pointer"}
          >
            <path
              d="M17.8286 0H1.36714C0.612857 0 0 0.595536 0 1.32661V17.0734C0 17.8045 0.612857 18.4 1.36714 18.4H17.8286C18.5829 18.4 19.2 17.8045 19.2 17.0734V1.32661C19.2 0.595536 18.5829 0 17.8286 0ZM5.80286 15.7714H2.95714V6.99036H5.80714V15.7714H5.80286ZM4.38 5.79107C3.46714 5.79107 2.73 5.08054 2.73 4.20982C2.73 3.33911 3.46714 2.62857 4.38 2.62857C5.28857 2.62857 6.03 3.33911 6.03 4.20982C6.03 5.08464 5.29286 5.79107 4.38 5.79107ZM16.47 15.7714H13.6243V11.5C13.6243 10.4814 13.6029 9.17125 12.1457 9.17125C10.6629 9.17125 10.4357 10.2802 10.4357 11.4261V15.7714H7.59V6.99036H10.32V8.18964H10.3586C10.74 7.49964 11.67 6.77268 13.0543 6.77268C15.9343 6.77268 16.47 8.59214 16.47 10.9579V15.7714Z"
              fill="#A5B1DF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            cursor={"pointer"}
          >
            <path
              d="M15.9908 4.28935C16.002 4.4599 16.002 4.63049 16.002 4.80104C16.002 10.003 12.3726 15.997 5.73904 15.997C3.69537 15.997 1.79691 15.3513 0.199951 14.2305C0.490317 14.267 0.769476 14.2792 1.07101 14.2792C2.75728 14.2792 4.30959 13.6579 5.54918 12.598C3.96339 12.5614 2.63446 11.4285 2.17658 9.86905C2.39995 9.90558 2.62329 9.92995 2.85783 9.92995C3.18167 9.92995 3.50555 9.8812 3.80706 9.79596C2.15427 9.43045 0.914642 7.84671 0.914642 5.93403V5.88531C1.39483 6.1777 1.95325 6.36044 2.54508 6.38478C1.57351 5.67816 0.936986 4.47209 0.936986 3.10761C0.936986 2.37666 1.11563 1.70661 1.42834 1.12184C3.20398 3.50965 5.87303 5.06901 8.86589 5.2396C8.81006 4.94721 8.77655 4.64268 8.77655 4.3381C8.77655 2.16955 10.3847 0.403076 12.3837 0.403076C13.4222 0.403076 14.3603 0.878201 15.0192 1.64571C15.8344 1.47516 16.6161 1.14621 17.3085 0.695464C17.0405 1.60919 16.4709 2.3767 15.7227 2.86398C16.4486 2.77874 17.1522 2.5594 17.7999 2.25486C17.3086 3.03453 16.6943 3.72891 15.9908 4.28935Z"
              fill="#A5B1DF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            cursor={"pointer"}
          >
            <path
              d="M9.77071 10.2999L10.2685 7.11472H7.15593V5.04775C7.15593 4.17634 7.59073 3.32693 8.98477 3.32693H10.3998V0.61509C10.3998 0.61509 9.1157 0.399902 7.88795 0.399902C5.32464 0.399902 3.64914 1.92546 3.64914 4.68715V7.11472H0.799805V10.2999H3.64914V17.9999H7.15593V10.2999H9.77071Z"
              fill="#A5B1DF"
            />
          </svg>
        </div>
      </div>
      <div className={classes.support}>
        <h3>Quick Links</h3>
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Car Collection</span>
        <span>Location</span>
        <span>Services</span>
      </div>
      <div className={classes.support}>
        <h3>Support</h3>
        <span>Affiliates</span>
        <span>Sitemap</span>
        <span>Cancelation Policy</span>
        <span>Privacy Policy</span>
        <span>Legal Disclaimer</span>
      </div>
      <div className={classes.contact}>
        <h3>Contact</h3>
        <ContactTab text={`77 Highfield Road London N36 7SB`} image={Icon2} />
        <ContactTab text={`212 123 0000`} image={Icon1} />
      </div>
      <span className={classes.mobile}>
        Mobile - © 2023 All Rights Reserved
      </span>
    </footer>
  );
}
