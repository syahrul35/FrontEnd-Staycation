import React from 'react'
import numberFormat from 'utils/numberFormat'

import imageHero from 'assets/images/img-hero.jpg'
import frameImageHero from 'assets/images/img-hero-frame.jpg'

import iconCities from 'assets/images/icons/icon-cities.svg'
import iconTraveler from 'assets/images/icons/icon-traveler.svg'
import iconTreasure from 'assets/images/icons/icon-treasure.svg'

import Button from 'elements/Button'

export default function Hero(props) {
    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

  return (
    <section className='container pt-4'>
        <div className='row align-items-center'>
            <div className='col-auto pr-5' style={{width: 530}}>
                <h1 className='fw-bold line-height-1 mb-3'>
                    Forget Busy Work, <br/>
                    Start Next Vacation
                </h1>
                <p className='mb-3 fw-light text-gray-500 w-75' style={{lineHeight: "170%"}}>
                    We provide what you need to enjoy your holiday with family. Time to make
                    another memorable moments.
                </p>
                <Button className='btn px-5 btn-shadow' hasShadow isPrimary onClick={showMostPicked}>
                    Show Me
                </Button>
                <div className='row' style={{marginTop: 80}}>
                    <div className='col-auto' style={{marginRight: 35}}>
                        <img width='36' height='36' src={iconTraveler} alt={`${props.data.travelers} Travelers`}/>
                        <h6 className='mt-3'>
                            {numberFormat(props.data.travelers)} {''}
                            <span className='text-gray-500 font-weight-light'>
                                Travelers
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto' style={{marginRight: 35}}>
                        <img width='36' height='36' src={iconTreasure} alt={`${props.data.treasures} Treasure`}/>
                        <h6 className='mt-3'>
                            {numberFormat(props.data.treasures)} {''}
                            <span className='text-gray-500 font-weight-light'>
                                Treasures
                            </span>
                        </h6>
                    </div>
                    <div className='col-auto' style={{marginRight: 35}}>
                        <img width='36' height='36' src={iconCities} alt={`${props.data.cities} Cities`}/>
                        <h6 className='mt-3'>
                            {numberFormat(props.data.cities)} {''}
                            <span className='text-gray-500 font-weight-light'>
                                Cities
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div className='col-6 pl-5 mt-4 ms-4'>
                <div style={{ width: 520, height: 410, position: 'relative' }}>
                    <img
                        src={imageHero}
                        alt='Room with couches'
                        className='img-fluid position-absolute'
                        style={{ margin:'-30px 0 0 -30px', zIndex: 1 }}
                    />
                    <img
                        src={frameImageHero}
                        alt='Room with couches frame'
                        className='img-fluid position-absolute'
                        style={{ margin:'0 -15px -15px 0' }}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
