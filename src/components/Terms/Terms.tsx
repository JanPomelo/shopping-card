"use strict";

import styles from "./Terms.module.scss";

const Terms = () => {
  return (
    <div className={styles.container}>
      <h2>Terms and Conditions</h2>
      <ol>
        <li>
          <h3>Interdimensional Booking: </h3>By using this site to schedule time with the coolest and weirdest duo in
          the multiverse, you agree to enter into mind-bending adventures that might challenge your reality. We're not
          responsible for any existential crises that may arise.
        </li>
        <li>
          <h3>Timey-Wimey Stuff: </h3>Time is a funky concept, so booking hours with Rick and Morty might not align with
          your regular Earth time. Expect some temporal shenanigans. We’ll try to be punctual, but no guarantees in this
          chaotic cosmos.
        </li>
        <li>
          <h3>Existential Conundrums: </h3>Be prepared for philosophical discussions that might make your brain hurt. We
          won't be held accountable if you start questioning the meaning of life or the existence of parallel universes.
        </li>
        <li>
          <h3>Infinite Possibilities: </h3>Our adventures might involve encounters with strange beings, alternate
          dimensions, or even cosmic entities. Hold onto your seatbelt, because it's going to be a wild ride.
        </li>
        <li>
          <h3>Dimensional Travel Insurance: </h3>We do not offer insurance for reality-warping mishaps, spontaneous
          teleportation, or accidental transformations into weird alien creatures. Consider signing a waiver if you're
          paranoid about ending up as a Cronenberg.
        </li>
        <li>
          <h3>Cancellation Policy: </h3>You can cancel or reschedule your appointment, but keep in mind that time is a
          tricky thing. We'll do our best to accommodate, but no guarantees in the quantum realm.
        </li>
        <li>
          <h3>Secrets of the Multiverse: </h3>
          Any information about classified intergalactic secrets, portal gun blueprints, or the secret ingredient in
          Eyehole cereal must remain strictly confidential. Non-disclosure is the key to a harmonious multiverse.
        </li>
        <li>
          <h3>Bye-Bye, Earth C-137: </h3>We reserve the right to refuse service to anyone who seems like a Jerry.
          Seriously, don’t be a Jerry.
        </li>
      </ol>
    </div>
  );
};

export default Terms;
