import styles from "./Main.module.css";
import Section from "./Section";
import accoflowImage1 from "../../assets/images/accoflow-1.webp";
import accoflowImage2 from "../../assets/images/accoflow-2.webp";
import vadaiImage1 from "../../assets/images/vadai-1.webp";
import vadaiImage2 from "../../assets/images/vadai-2.webp";
import citelisImage1 from "../../assets/images/citelis-1.webp";
import citelisImage2 from "../../assets/images/citelis-2.webp";

const Main = () => {
  return (
    <main className={styles.main}>
      <Section
        date="Feb 2024 - Present"
        company="AccoFLOW! + Martinez Accounting Services"
        role="Software Engineer"
        link="https://accoflow.com/"
        img1={accoflowImage1}
        img2={accoflowImage2}
        paragraph1="Engineered a CRM platform for US accountants, streamlining task and staff administration while enhancing development workflows through version control and agile methodologies."
        paragraph2="Optimized user account linking via Google Cloud, migrated PayPal to Stripe, built mass communication tools with SendGrid and Twilio, and refined OpenAI API prompts for effectiveness."
      />
      <Section
        date="Apr 2023 - Sep 2023"
        company="Vadai"
        role="Software Developer"
        link="https://vadai.com.mx/"
        img1={vadaiImage1}
        img2={vadaiImage2}
        paragraph1="Digitized time clock operations by developing a web platform that utilized QR codes for efficient employee tracking."
        paragraph2="Engineered diverse web platforms, from simple websites to robust systems, integrating payment gateways via Mercado Pago API and linking user accounts to Google Workspace via Google Cloud Platform."
      />
      <Section
        date="Ene 2023 - Apr 2023"
        company="Citelis"
        role="IT Help Desk"
        link="https://citelis.com.mx/"
        img1={citelisImage1}
        img2={citelisImage2}
        paragraph1="Developed a Help Desk platform for the support of equipment, devices and programs of the company's employees."
        paragraph2="Performed on-site and remote support to servers and personal equipment of the staff."
      />
    </main>
  );
};

export default Main;
