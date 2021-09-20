import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { ScheduleSection } from "~components"

import {
  BrowserView,
  MobileView
} from "react-device-detect";
import SpeakerBioModal from "./speakers/SpeakerBioModal";
import SpeakerBioItem from "./speakers/SpeakerBioItem";
import { Transition } from "@headlessui/react";
import { Helmet } from "react-helmet"
import { SpeakersData, TrainersData } from "~data"

import workshopImage from "../images/iosconfsg-workshop.jpg"
import confImage from "../images/iosconf-team.jpeg"
import sponsorDeck from "../downloads/sponsors-deck.pdf";

function IndexPage () {
  const [showBio, setShowBio] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const handleShowBio = (speaker) => {
    setSelectedSpeaker(speaker)
    setShowBio(!showBio)
  }

  const handleShowSpeaker = (name) => {
    const person = SpeakersData.filter(function (speaker) {
      return speaker.name === name
    })
    if (person && person.length > 0) {
      setSelectedSpeaker(person[0])
      setShowBio(true)
    }
  }
  const handleCloseBio = () => setShowBio(false)

  return (
    <Layout>
      <Helmet>
        <script src='https://js.tito.io/v2' async></script>
      </Helmet>
      <SEO
        keywords={[`ios`, `ios conference`, `iosConf Singapore`, `ios developer`]}
        title="Home"
      />
      <section className="w-full bg-hero bg-cover bg-center">
        <BrowserView>
          <div className="flex flex-col max-w-4xl mx-auto pl-4 py-24">
            <h1 className="text-4xl text-orange-500">iOS Conf SG - 2022</h1>
            <h2 className="text-white text-xl">Virtual Edition</h2>
            <h3 className="text-white text-xl mb-0">Workshops - 17th and 18th January</h3>
            <h3 className="text-white text-xl mt-0">Conference - 20th and 21st January</h3>
            <a href="#ticket" className="bg-orange-500 w-1/3 text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
          </div>
        </BrowserView>
        <MobileView>
          <div className="flex flex-col max-w-4xl pl-4 py-6">
            <h1 className="text-3xl text-orange-500">iOS Conf SG - 2022</h1>
            <h2 className="text-white text-m">Virtual Edition</h2>
            <h3 className="text-white text-xs mb-0">Workshops - 17th and 18th January</h3>
            <h3 className="text-white text-xs mt-0">Conference - 20th and 21st January</h3>
            <a href="#ticket" className="bg-orange-500 w-1/3 text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
          </div>
        </MobileView>
      </section>
      <section className="w-full">
        <div className="flex flex-col flex-no-wrap md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-bottom" style={{ backgroundImage: `url(${workshopImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Workshops</h1>
                <p>Hands-on workshop on SwiftUI and iOS security.</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-top h-0" style={{ backgroundImage: `url(${confImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Conference</h1>
                <p>Native iOS and Swift programming talks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="speakers" className="w-full text-center py-24 bg-gray-100">
        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Speakers
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {
              SpeakersData.map((speaker, index) => {
                return (
                  <li key={index}>
                    <SpeakerBioItem handleClick={() => handleShowBio(speaker)} speaker={speaker} />
                  </li>
                )
              })
            }
          </ul>
          <br/><br/>
          <strong>More speakers to be announced...</strong>
        </div> <br></br>
        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Workshop Trainers
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
            {
              TrainersData.map((speaker, index) => {
                return (
                  <li key={index}>
                    <SpeakerBioItem handleClick={() => handleShowBio(speaker)} speaker={speaker} />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Transition show={showBio} appear={true} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <SpeakerBioModal speaker={selectedSpeaker} handleClose={handleCloseBio} />
        </Transition>
      </section>
      <section id="sponsors" className="w-full py-24">
      <div className="text-center w-full">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
            Become A Sponsor
          </h2>
        </div>      
        <div className="w-full">
          <p className="mb-12 mx-auto text-center">
            If you&apos;d like to support and engage our iOS community, please <a href="mailto:subh@iosconf.sg" className="text-orange-500">contact us</a> for more information. Thank you!
          </p>
          <p className="mb-12 mx-auto text-center">
            <a href={sponsorDeck} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border-gray-400 rounded shadow">Download Sponsorship Deck</a>
          </p>
        </div>
      </section>
      <section id="ticket" className="w-full py-24 bg-gray-100">
        <div className="text-center w-full">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
            Tickets
          </h2>
        </div>
        <tito-widget event="ios-conf-sg/2022"></tito-widget>
        <div className="max-w-4xl lg:mx-auto grid lg:grid-cols-3 lg:gap-x-5 mt-16">
          <div>
            <div className="text-left">
              <span className="inline-flex rounded-full bg-indigo-100 text-indigo-800 px-3">Early-bird Tickets</span>
            </div>
            <p className="text-xl font-semibold text-left">
              Get it while you can!
              </p>
            <p className="text-left">
              Early-bird tickets are available until 15th November 2021. Choose a ticket for both conference plus workshop (S$220) or conference only (S$70).
              </p>
          </div>
          <div>
            <div className="text-left">
              <span className="inline-flex rounded-full bg-pink-100 text-pink-800 px-3">Regular Price</span>
            </div>
            <p className="text-xl font-semibold text-left">
              The 7th Edition of iOS Conf SG!
              </p>
            <p className="text-left">
              From 16th November, the conference plus workshop ticket is S$350. Conference ticket is S$150.
              </p>
          </div>
          <div>
            <div className="text-left">
              <span className="inline-flex rounded-full bg-green-100 text-green-800 px-3">Workshops</span>
            </div>
            <p className="text-xl font-semibold text-left">
              Level up through workshops!
              </p>
            <p className="text-left">
              A workshop on <strong>Find vulnerabilities in iOS Apps</strong> by Sven Schleier on Tuesday, 17 Jan 2022, 1 PM - 6 PM SGT. And <strong>Multi-platform Development with SwiftUI</strong> by Malin Sundberg on Monday, 18 Jan 2022, 9 AM - 2 PM SGT.
            </p>
          </div>
        </div>
      </section>
      <section id="schedule" className="w-full py-24">
        <div className="flex flex-col md:flex-row lg:mx-auto justify-center max-w-4xl md:mx-8">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
            Schedule
          </h2>
        </div>
        <div className="flex flex-col max-w-4xl lg:mx-auto justify-center">
          <ScheduleSection showSpeakerBioHandler={handleShowSpeaker} />
        </div>
      </section>
    </Layout >
  );
}

export default IndexPage;
