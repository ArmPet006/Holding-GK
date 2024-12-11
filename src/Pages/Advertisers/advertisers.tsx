import React from 'react'
import AdvertisersCard from "../../Components/AdvertisersCard/advertisersCard.tsx"

const Advertisers = () => {
  return (
    <div className='advertisers_container'>
        <AdvertisersCard logo={undefined} title={"Heading"} price={100} />
        <AdvertisersCard logo={undefined} title={"Heading"} price={100} />
        <AdvertisersCard logo={undefined} title={"Heading"} price={100} />
        <AdvertisersCard logo={undefined} title={"Heading"} price={100} />
        <AdvertisersCard logo={undefined} title={"Heading"} price={100} />
    </div>
  )
}

export default Advertisers
