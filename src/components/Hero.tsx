import React from 'react';
import styles from '../assets/Hero.module.scss';

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <div>
                <div className={styles.heroBlock}>
                    <h1>
                        Discover and Collect The Best NFTs Digital Art.
                    </h1>
                    <p>
                        Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s.
                        Start exploring the world of digital art and NFTs today and take control of your digital assets
                        with confidence!
                    </p>
                    <div className={styles.blockButton}>
                        <button>
                            Explore Now
                        </button>
                        <button>
                            Learn More
                        </button>
                    </div>
                    <div className={styles.heroThree}>
                        <div>
                            <h1 data-last='k'>8.9</h1>
                            <p>Art work</p>
                        </div>
                        <div>
                            <h1 data-last='k'>65</h1>
                            <p>Artist</p>
                        </div>
                        <div>
                            <h1 data-last='k'>87</h1>
                            <p>Collections</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src='/ilu.png' alt='hero'/>
                    <img src='/cta.png' alt='cta'/>
                </div>
            </div>
        </div>
    );
};

export default Hero;