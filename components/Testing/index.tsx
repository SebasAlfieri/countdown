import React from 'react';
import s from './Testing.module.css';
import 'atropos/css';
import Atropos from 'atropos/react';
import Image from 'next/image';

const Testing = () => {
  return (
    <div className={s.container}>
      {/* Atropos */}
      <Atropos className={s.container__atropos} data-atropos-offset={10} shadowScale={0}>
        <Image
          className={s.container__atropos__logo}
          src={'/images/logo.png'}
          alt="aa"
          width={600}
          height={300}
        />
        <Image
          className={s.container__atropos__ruffles__a}
          src={'/images/ruffles.png'}
          alt="aa"
          width={300}
          height={300}
        />
        <Image
          className={s.container__atropos__ruffles__b}
          src={'/images/ruffles.png'}
          alt="aa"
          width={300}
          height={300}
        />
        <Image
          className={s.container__atropos__ruffles__c}
          src={'/images/ruffles.png'}
          alt="aa"
          width={300}
          height={300}
        />
        <Image
          className={s.container__atropos__ruffles__d}
          src={'/images/ruffles.png'}
          alt="aa"
          width={300}
          height={300}
        />
        <button onClick={() => alert('aaa')}>CONECTA A SPOTIFY</button>
      </Atropos>
    </div>
  );
};

export default Testing;
