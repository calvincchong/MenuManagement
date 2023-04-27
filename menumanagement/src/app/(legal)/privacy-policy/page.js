import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';
import styles from './page.module.css';

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className={styles['privacy-text']}>
        <div className={styles['section']}>
          <h1>Privacy Policy</h1>
          <p></p>
        </div>
        <div className={styles['section']}>
          <h2> Disclosing Your Information </h2>
          <p>
            Where applicable, we may disclose your personal information to any
            member of our group. This includes, where applicable, our
            subsidiaries, our holding company and its other subsidiaries, if
            any.
          </p>
          <ul>
            <li>
              i. Details of your visits to our service and the resources that
              you access, including, but not limited to, traffic data, location
              data, weblogs and other communication data.
            </li>
            <li>
              ii. Information that you provide by filling in forms on our
              service, such as when you registered for information or make a
              purchase.
            </li>
            <li>
              iii. Information provided to us when you communicate with us for
              any reason.{' '}
            </li>
          </ul>
        </div>

        <div className={styles['section']}>
          <h2>Storing Personal Data</h2>
          <p>
            Data that is provided to us is stored on our secure servers. Details
            relating to any transactions entered into on our application will be
            encrypted to ensure its safety. The transmission of information via
            the internet is not completely secure and therefore we cannot
            guarantee the security of data sent to us electronically and
            transmission of such data is therefore entirely at your own risk.
            Where we have given you (or where you have chosen) a password so
            that you can access certain parts of our service, you are
            responsible for keeping this password confidential.
          </p>
        </div>

        <div className={styles['section']}>
          <h2> Disclosing Your Information </h2>
          <p>
            Where applicable, we may disclose your personal information to any
            member of our group. This includes, where applicable, our
            subsidiaries, our holding company and its other subsidiaries, if
            any.
          </p>
          <ul>
            <li>
              i. Where we sell any or all of our business and/or our assets to a
              third party.
            </li>
            <li>
              ii. Where we are legally required to disclose your information.
            </li>
            <li>iii. To assist fraud protection and minimize credit risk.</li>
          </ul>
        </div>

        <div className={styles['section']}>
          <h2>Opt-In Marketing </h2>
          <p>
            You have the choice to not receive certain information from us or
            any of our partners. You have the option to Opt- out at any stage.
            If you choose to receive information from us it will be sent to the
            email address of the nominated customer representatives. In regard
            to this we base our policy completely to permission based email
            marketing. Other than as mentioned above, we will not send you or
            any of your representatives, unsolicited emails, commercials, offers
            or advertisements. We will not sell, rent, or loan customer
            information to any outside firm nor will we use the personal
            information or our or its partners own marketing purposes, other
            than as requested. All emails sent to customers at their request
            will have the option to unsubscribe from us. Requests will be
            processed and fulfilled within minutes and we will do everything
            reasonably possible to ensure that no further communications will be
            sent to customers who have stated that they do not wish to receive
            the specified communication or information.
          </p>
        </div>

        <div className={styles['section']}>
          <h2>Information used by Third Party</h2>
          <p>
            Koo Koo Chicken Corp.will not provide customer Information or any
            other personal or private data to third parties without the
            customer’s rights or permission and only in exceptional
            circumstances where such disclosure is necessary to process
            transactions or provide services to the customer. Contrary to the
            above, we will only divulge or use customer information or private
            data if we; (1) are compelled to do so by an appropriately empowered
            governmental authority or (2) our technology or services available
            to Customers through or with the assistance of its business
            partners.
          </p>
        </div>

        <div className={styles['section']}>
          <h2>Effective Date of Policy</h2>
          <p>
            This policy is effective and current as of January 2023. We may make
            changes to this policy and process and systems without further
            warning. We may also update this privacy policy to reflect updates,
            you will be notified of any changes by email. Maintaining this
            privacy policy of customer information is of utmost importance to us
            and it helps build stronger relationships, goodwill and increase
            confidence.
          </p>
        </div>

        <div className={styles['section']}>
          <h2>Changes</h2>
          <p>
            Koo Koo Chicken Corp may change or update this Privacy Policy so
            please keep visiting it and reviewing it periodically. We may
            provide you with added forms of notice of modifications or updates
            under certain circumstances. Your use of Koo Koo Chicken Corp.after
            any changes or updates made to this Privacy Policy will mean that
            you accept any further changes made to this Privacy Policy.
          </p>
          <p>
            If you have any questions about Please do not hesitate to contact us
            at hello@kookoochicken.nyc.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
