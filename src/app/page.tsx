import Countdown from "@/app/components/Countdown";
import Image from "next/image";
import ButtonLocation from "@/app/components/ButtonLocation";
import FormJoinWedding from "@/app/components/FormJoinWedding";

export default function Home() {
  return (
    <main>
      <section className="bg-base-100">
        <div className="relative w-full">
          <Image
            src="/main.jpg"
            alt="Family Photo"
            width={1920}
            height={1080}
            objectFit="contain"
            className="w-full"
          />
        </div>
      </section>
      <section className=" bg-amber-900 text-white ">
        <div className=" relative bg-amber-900 text-white flex flex-col items-center justify-center px-4 py-16 space-y-10 text-center">
          <h1 className="text-8xl font-light font-dancing">Šárka</h1>
          <div className="flex items-center w-1/2">
            <div className="flex-grow border-t border-white "></div>
            <span className="mx-4 text-4xl font-dancing">&</span>
            <div className="flex-grow border-t border-white"></div>
          </div>
          <h1 className="text-8xl font-dancing ">Martin</h1>

          <p className="text-xl max-w-6xl  px-20">
            Vás srdečně zvou na svou svatbu, která se uskuteční 9. srpna 2025 v
            09:00. Těšíme se, že s námi oslavíte tento výjimečný den.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center space-y-10 my-10">
          <h1 className="text-7xl font-light font-dancing">
            We are getting married
          </h1>
          <Countdown />
        </div>
        <div>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            className="w-full h-auto bg-amber-900"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              //   fill="#f5f5f5"
              // fill with white
              fill="#fff"
            />
          </svg>
        </div>
      </section>
      <section className="bg-base-200">
        <div className="bg-white flex flex-col justify-center items-center">
          <div className="flex flex-col items-center -space-y-36">
            <div className="flex justify-center">
              <img
                src="/line-flowers.jpg"
                alt="Decorative Flower"
                className="opacity-30 max-w-sm "
              />
            </div>
            <div className="flex flex-col items-center text-center space-y-6 z-10">
              <h1 className="text-7xl font-sans text-gray-800">
                Wedding Schedule
              </h1>
              <div className="flex items-center space-x-4 w-1/2">
                <div className="flex-grow border-t border-black"></div>
                <span className="text-4xl font-dancing">Save The Date</span>
                <div className="flex-grow border-t border-black"></div>
              </div>

              <p className="text-xl font-extrabold text-gray-700">
                Saturday, August 9, 2025
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center my-20 gap-40 w-full">
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96">
              <div className="flex justify-center mb-10">
                <Image
                  src="/ceremony.png"
                  alt="Ceremony"
                  width={300}
                  height={300}
                  className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold">Wedding Ceremony</h2>
              <p className="text-md font-extrabold text-gray-800">09:00 hrs.</p>
              <p className="text-md text-gray-600">Ceremony</p>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10 text-gray-800"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-md text-gray-800 ">
                Kostel sv. Markéty, U Sv. Markéty, 386 01 Strakonice 1
              </p>
              <div className="mt-auto">
                <ButtonLocation
                  title="Location"
                  url="https://goo.gl/maps/7Z3Z9Z9Z9Z9Z9Z9Z9"
                />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col justify-start space-y-4 text-center max-w-96">
              <div className="flex justify-center mb-10">
                <Image
                  src="/celebration.png"
                  alt="Celebration"
                  width={300}
                  height={300}
                  className="w-28 rounded-xl"
                />
              </div>
              <h2 className="text-xl font-bold">Wedding Reception</h2>
              <p className="text-md font-extrabold text-gray-800">
                12 :00 hrs.
              </p>
              <p className="text-md text-gray-600">Party</p>
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10 text-gray-800"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md text-gray-800 ">
                Pension Regina U Rybníka 8, 382 11 Větřní
              </p>
              <div className="mt-auto">
                <ButtonLocation
                  title="Location"
                  url="https://goo.gl/maps/7Z3Z9Z9Z9Z9Z9Z9Z9"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-amber-900 text-white">
        <FormJoinWedding></FormJoinWedding>
      </section>
    </main>
  );
}
