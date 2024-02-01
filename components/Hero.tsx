"use client";

import Image from "next/image"
import  CustomButton  from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                buy and sell ethiopian gemston --quickly and easily
            </h1>

            <p className="hero__subtitle">
                buy ethiopian gemstone from the original soruce
            </p>

            <CustomButton
                title="Explore gemstone"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={ handleScroll }

            />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain" />

                <div className="hero__image-overlay" />
            </div>
        </div>
    </div>
  )
}

export default Hero