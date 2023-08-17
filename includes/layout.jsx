import Head from "next/head";
import styles from "../styles/index.module.css"
import { SITE_DESCRIPTION, SITE_LINK, SITE_META_IMG, SITE_NAME } from "../lib/constants"
import Footer from "./footer";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Layout({children,page="index"}){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return <div className={styles.containerMain}>
        <Head>

            <title>{SITE_NAME + " - " +SITE_DESCRIPTION}</title>
            
            {/* Global Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="title" content={SITE_NAME + " - " +SITE_DESCRIPTION}></meta>
            <meta name="description" content={SITE_DESCRIPTION} />

            {/* Facebook/Google Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_LINK} />
            <meta property="og:title" content={SITE_NAME} />
            <meta property="og:description" content={SITE_DESCRIPTION} />
            <meta property="og:image" content={SITE_META_IMG} />

            {/* Twitter Meta Tags */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={SITE_LINK} />
            <meta property="twitter:title" content={SITE_NAME} />
            <meta property="twitter:description" content={SITE_DESCRIPTION} />
            <meta property="twitter:image" content={SITE_META_IMG}></meta>
            
        </Head> 

        <main className="container">
            {
                children
            }
        </main>
        <Footer></Footer>
    </div>;
}