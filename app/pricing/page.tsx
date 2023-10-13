'use client'
import axios from 'axios'
import { useState, useEffect } from 'react'

  interface Price {
        id: string;
        object: string;
        active: boolean;
        billing_scheme: string;
        created: number;
    }

    type PriceArray = Price[];

const ListPrice = () => {
    const [prices,setPrices] = useState<PriceArray>([]);

    useEffect(() => {
     fetchPrices()
    }, [])

    const fetchPrices = async () => {
    const { data } = await axios.get('/api/getproducts')
    setPrices(data)
    }

    const priceIds = prices.map(price => price.id);
  
    const handleSubscription =  async (e: any) => {
     e.preventDefault()
     const { data } = await axios.post('/api/payment',
     {
        priceId: 'price_1O0SdWK2n4aaWJXKzeTlCm2O'
     },
     {
        headers: {
            "Content-Type": "application/json",
        }
     }
     )
     window.location.assign(data)
    }

  return (
    <section
    className="
    bg-white
    pt-10
    pb-12
    lg:pb-[90px]
    relative
    z-20
    overflow-hidden
    "
    >
    <div className="container">
       <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
             <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-red-700 mb-2 block">
                Pricing Table
                </span>
                <h2
                   className="
                   font-bold
                   text-4xl
                  
                   text-dark
                   mb-4
                   "
                   >
                   Our Pricing Plan
                </h2>
                <p className="text-base text-body-color">
                Choose the plan that’s right for you
                </p>
             </div>
          </div>
       </div>
       <div className="flex flex-wrap justify-center -mx-4">
          <div className=" md:w-1/2 lg:w-1/3 px-4">
             <div
                className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                hover:border-red-900
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                "
                >
                <span className="text-red-600 font-semibold text-lg block mb-4">
                Basic
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                   PKR450
                   <span className="text-base text-body-color font-medium">
                   /MO
                   </span>
                </h2>
                <p
                   className="P
                   text-base text-body-color
                   pb-8
                   mb-8
                   border-b border-[#F2F2F2]
                   "
                   >
                   Personal Usage
                </p>
                <div className="mb-7">
                   <p className="text-base text-body-color leading-loose mb-1">
                      One User
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      All Movies
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      Fair Sound Quality
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      720p resolution
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      Use on multiple device
                   </p>
                </div>
                <button 
                onClick={handleSubscription}
                   className="
                   w-full
                   block
                   text-base
                   font-semibold
                   text-red-600
                   bg-transparent
                   border border-[#D4DEFF]
                   rounded-md
                   text-center
                   p-4
                   hover:text-white hover:bg-red-600 hover:border-red-900
                   transition
                   "
                   >
                Choose Basic
                </button>
                <div>
                   <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                         width="77"
                         height="172"
                         viewBox="0 0 77 172"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                         <defs>
                            <linearGradient
                               id="paint0_linear"
                               x1="86"
                               y1="0"
                               x2="86"
                               y2="172"
                               gradientUnits="userSpaceOnUse"
                               >
                               <stop stopColor="#E50914" stopOpacity="0.09" />
                               <stop
                                  offset="1"
                                  stopColor="#C4C4C4"
                                  stopOpacity="0"
                                  />
                            </linearGradient>
                         </defs>
                      </svg>
                   </span>
                   <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                         width="41"
                         height="89"
                         viewBox="0 0 41 89"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="38.9138"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 38.9138 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 38.9138 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 38.9138 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 38.9138 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 38.9138 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 38.9138 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 38.9138 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="1.42021"
                            r="1.42021"
                            transform="rotate(180 38.9138 1.42021)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 26.4157 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 26.4157 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 26.4157 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 26.4157 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 26.4157 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 26.4157 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 26.4157 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 26.4157 1.4202)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 13.9177 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 13.9177 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 13.9177 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 13.9177 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 13.9177 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 13.9177 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 13.9177 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="1.42019"
                            r="1.42021"
                            transform="rotate(180 13.9177 1.42019)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 1.41963 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 1.41963 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 1.41963 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 1.41963 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 1.41963 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 1.41963 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 1.41963 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 1.41963 1.4202)"
                            fill="#E50914"
                            />
                      </svg>
                   </span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
             <div
                className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                hover:border-red-900
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                "
                >
                <span className="text-red-600 font-semibold text-lg block mb-4">
                Standard
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                   PKR800
                   <span className="text-base text-body-color font-medium">
                   / MO
                   </span>
                </h2>
                <p
                   className="
                   text-base text-body-color
                   pb-8
                   mb-8
                   border-b border-[#F2F2F2]
                   "
                   >
                   Standard Usage
                </p>
                <div className="mb-7">
                   <p className="text-base text-body-color leading-loose mb-1">
                      Four Users
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      All Movies
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      Better Sound Quality
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      1080p resolution
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      Use on 3 (Three) Screens
                   </p>
                   
                </div>
                <a
                   href="/"
                   className="
                   w-full
                   block
                   text-base
                   font-semibold
                   text-red-600
                   border border-[#D4DEFF]
                   rounded-md
                   text-center
                   p-4
                   hover:text-white hover:bg-red-600 hover:border-red-900
                   transition
                   "
                   >
                Choose Standard
                </a>
                <div>
                   <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                         width="77"
                         height="172"
                         viewBox="0 0 77 172"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                         <defs>
                            <linearGradient
                               id="paint0_linear"
                               x1="86"
                               y1="0"
                               x2="86"
                               y2="172"
                               gradientUnits="userSpaceOnUse"
                               >
                               <stop stopColor="#E50914" stopOpacity="0.09" />
                               <stop
                                  offset="1"
                                  stopColor="#C4C4C4"
                                  stopOpacity="0"
                                  />
                            </linearGradient>
                         </defs>
                      </svg>
                   </span>
                   <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                         width="41"
                         height="89"
                         viewBox="0 0 41 89"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="38.9138"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 38.9138 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 38.9138 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 38.9138 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 38.9138 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 38.9138 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 38.9138 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 38.9138 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="1.42021"
                            r="1.42021"
                            transform="rotate(180 38.9138 1.42021)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 26.4157 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 26.4157 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 26.4157 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 26.4157 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 26.4157 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 26.4157 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 26.4157 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 26.4157 1.4202)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 13.9177 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 13.9177 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 13.9177 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 13.9177 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 13.9177 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 13.9177 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 13.9177 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="1.42019"
                            r="1.42021"
                            transform="rotate(180 13.9177 1.42019)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 1.41963 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 1.41963 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 1.41963 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 1.41963 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 1.41963 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 1.41963 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 1.41963 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 1.41963 1.4202)"
                            fill="#E50914"
                            />
                      </svg>
                   </span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
             <div
                className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                hover:border-red-900
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                "
                >
                <span className="text-red-600 font-semibold text-lg block mb-4">
                Premium
                </span>
                <h2 className="font-bold text-dark mb-5 text-[42px]">
                   PKR1100
                   <span className="text-base text-body-color font-medium">
                   / MO
                   </span>
                </h2>
                <p
                   className="
                   text-base text-body-color
                   pb-8
                   mb-8
                   border-b border-[#F2F2F2]
                   "
                   >
                   Family Plan
                </p>
                <div className="mb-7">
                   <p className="text-base text-body-color leading-loose mb-1">
                      Five Users
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                      Offline Movies
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                     Best Sound Quality
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                   4K+HDR
                   </p>
                   <p className="text-base text-body-color leading-loose mb-1">
                        Use on 5 (Five) Screens
                   </p>
                </div>
                <a
                   href="/"
                   className="
                   w-full
                   block
                   text-base
                   font-semibold
                   text-red-600
                   bg-transparent
                   border border-[#D4DEFF]
                   rounded-md
                   text-center
                   p-4
                   hover:text-white hover:bg-red-600 hover:border-red-900
                   transition
                   "
                   >
                Choose Professional
                </a>
                <div>
                   <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                         width="77"
                         height="172"
                         viewBox="0 0 77 172"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                         <defs>
                            <linearGradient
                               id="paint0_linear"
                               x1="86"
                               y1="0"
                               x2="86"
                               y2="172"
                               gradientUnits="userSpaceOnUse"
                               >
                               <stop stopColor="#E50914" stopOpacity="0.09" />
                               <stop
                                  offset="1"
                                  stopColor="#C4C4C4"
                                  stopOpacity="0"
                                  />
                            </linearGradient>
                         </defs>
                      </svg>
                   </span>
                   <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                         width="41"
                         height="89"
                         viewBox="0 0 41 89"
                         fill=""
                         xmlns="http://www.w3.org/2000/svg"
                         >
                         <circle
                            cx="38.9138"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 38.9138 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 38.9138 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 38.9138 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 38.9138 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 38.9138 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 38.9138 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 38.9138 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="38.9138"
                            cy="1.42021"
                            r="1.42021"
                            transform="rotate(180 38.9138 1.42021)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 26.4157 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 26.4157 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 26.4157 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 26.4157 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 26.4157 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 26.4157 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 26.4157 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="26.4157"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 26.4157 1.4202)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 13.9177 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 13.9177 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 13.9177 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 13.9177 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 13.9177 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 13.9177 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 13.9177 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="13.9177"
                            cy="1.42019"
                            r="1.42021"
                            transform="rotate(180 13.9177 1.42019)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="87.4849"
                            r="1.42021"
                            transform="rotate(180 1.41963 87.4849)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="74.9871"
                            r="1.42021"
                            transform="rotate(180 1.41963 74.9871)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="62.4892"
                            r="1.42021"
                            transform="rotate(180 1.41963 62.4892)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="38.3457"
                            r="1.42021"
                            transform="rotate(180 1.41963 38.3457)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="13.634"
                            r="1.42021"
                            transform="rotate(180 1.41963 13.634)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="50.2754"
                            r="1.42021"
                            transform="rotate(180 1.41963 50.2754)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="26.1319"
                            r="1.42021"
                            transform="rotate(180 1.41963 26.1319)"
                            fill="#E50914"
                            />
                         <circle
                            cx="1.41963"
                            cy="1.4202"
                            r="1.42021"
                            transform="rotate(180 1.41963 1.4202)"
                            fill="#E50914"
                            />
                      </svg>
                   </span>
                </div>
             </div>
          </div>
       </div>
    </div>
 </section>
  )
}

export default ListPrice