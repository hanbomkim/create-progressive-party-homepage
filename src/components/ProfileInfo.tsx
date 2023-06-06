import Image from 'next/image';
import React from 'react';
import sky from '../../public/imgs/sky.jpeg';
import { MainImg } from './ProfileInfo.style';

export default function ProfileInfo() {
  return (
    <MainImg>
      <Image src={sky} alt='sky' width={720} height={300} />
    </MainImg>
  );
}
