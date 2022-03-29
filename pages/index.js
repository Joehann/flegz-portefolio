import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Flegz from "../public/img/flegz-1.jpg";
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ left: 50, top: 50 });

  function handleMouseMove(event) {
    setMousePosition({ left: event.pageX, top: event.pageY });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Flegz - portefolio</title>
        <meta
          name="Flegz-portefolio"
          content="Flegz - composer, musican, arranger - portefolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={styles.overlay}
        onMouseMove={(event) => handleMouseMove(event)}
        style={{
          background: `radial-gradient(circle at ${mousePosition.left}px ${mousePosition.top}px,  transparent 160px,
            rgba(0, 0, 30, 0.85) 200px`,
        }}
      ></div>
      <div className={styles.home}>
        <Image src={Flegz} alt="Flegz"></Image>

        <h1>Flegz&nbsp;Music</h1>
        <h2>
          Composer&nbsp;<span>•</span>&nbsp;Musician&nbsp;<span>•</span>
          &nbsp;Arranger
        </h2>

        <Link href="/main">
          <button>Enter</button>
        </Link>

        <svg>
          <defs>
            <filter id="filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.1061 0.048"
                numOctaves="1"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
