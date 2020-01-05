import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

function About(props) {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Ut incididunt reprehenderit voluptate nisi. Quis occaecat commodo
            quis laborum. Cillum irure qui adipisicing dolore nulla cillum
            deserunt. Ullamco ex occaecat sit dolor ullamco. Anim qui quis
            consectetur non do laborum cillum fugiat fugiat.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
