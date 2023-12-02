"use strict";

import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.qaContainer}>
        <p>Q: Can I really hang out with the characters?</p>
        <p>
          A: Absolutely! Buckle up for some interdimensional fun. Just be ready for the unexpected, like, really
          unexpected.
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: How long do the adventures last?</p>
        <p>
          A: Time is a relative thing when you're jumping through dimensions. We offer hourly slots, but who knows where
          time will take us?
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: Can I bring my own portal gun?</p>
        <p>
          A: Nope, sorry! Portal guns are for Rick's use only. But we promise, ours will take you to places you've never
          dreamed of.
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: Are there age restrictions for these adventures?</p>
        <p>
          A: While there's no set age limit, keep in mind that some dimensions might not be suitable for all ages. Use
          your best judgment, parents!
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: What should I wear for these adventures?</p>
        <p>
          A: Dress comfortably for all occasions and climates. And hey, maybe avoid anything too flashy; you don't want
          to attract unwanted alien attention.
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: Can I take pictures or videos during the adventures?</p>
        <p>
          A: Sorry, but capturing memories of our escapades is strictly prohibited. Some things are better left
          unrecorded, trust us.
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: Can I request a specific adventure or dimension to visit?</p>
        <p>
          A: We encourage suggestions, but remember, the multiverse is our playground. We'll try our best to accommodate
          your wishes, but no guarantees!
        </p>
      </div>
      <div className={styles.qaContainer}>
        <p>Q: How do I know if I'm ready for this experience?</p>
        <p>
          A: If you're ready to question your existence, face mind-bending challenges, and have a wild time, then you're
          halfway there! Just brace yourself for anything.
        </p>
      </div>
    </div>
  );
};

export default Faq;
