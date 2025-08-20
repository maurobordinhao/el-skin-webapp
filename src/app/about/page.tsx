import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.texto}>
        <h2>Sobre a AL SKIN</h2>

        <h4>QUEM SOMOS</h4>
        <p>...</p>

        <h4>POR QUE EXISTIMOS?</h4>
        <p>...</p>

        <h4>O QUE A GENTE FAZ?</h4>
        <p>...</p>

        <div className={styles.imgWrap}>
          <Image
            src="/sobre1.png"
            alt="Imagem gota"
            width={640}
            height={360}
            className={styles.img}
            priority
          />
        </div>
      </section>

      <aside className={styles.lateral}>
        <Image
          src="/sobre2.png"
          alt="Imagem tubo"
          width={640}
          height={360}
          className={styles.img}
        />

        <div className={styles.cta}>
          <h4>VAMOS CONVERSAR?</h4>
          <p>...</p>
          <button className={styles.botao}>💬 Fale conosco</button>
        </div>
      </aside>
    </main>
  );
}
