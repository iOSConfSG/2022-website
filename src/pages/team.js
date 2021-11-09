import React from "react";
import Layout from "../components/layout";

import OrganiserBioItem from "./organisers/OrganiserBioItem";
import { OrganiserData } from "~data"

function TeamPage() {    
  return (
    <Layout>
      <section className="w-full">
        <div className="bg-orange-500">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
            <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
              About Us
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p>
            We, a team of developers like you, love iOS and are passionate about building apps in Swift. We are inspired and motivated by the technology and ecosystem Apple provides for developers. <br/> <br/> We believe that if we bring the power of these technologies to every iOS developer we know, we can contribute to building more innovative and better apps. So we started iOS Conf SG in 2015. Since then, the community has grown to make iOS Conf SG <strong>the largest iOS developer conference in South East Asia</strong>.
            </p> <br/>

            <p><strong>iOS Conf SG</strong> is recognised as <a href="https://www.hackingwithswift.com/awards" target="_blank" rel="noreferrer">a highly commended conference</a> by the Swift Community Awards. Participants find our event most interesting, insightful, or beneficial for their careers.</p>            
            <br/>
            <p><strong>IOS CONF SG PTE. LTD.</strong> is the registered entity under which we organise the event.</p>
          </div>
        </div>
      </section>
      <section id="team" className="w-full text-center py-24 bg-gray-100">
        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Organising Team
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {
              OrganiserData.map((organiser, index) => {
                return (
                  <li key={index}>
                    <OrganiserBioItem organiser={organiser} />
                  </li>
                )
              })
            }
          </ul>
        </div>

        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul>
              <li>
                Subhransu Behera : +65 8388 7595 | {" "}
                <a href="mailto:subh&#64;iosconf.sg">subh@iosconf.sg</a>
              </li>
              <li>
                Melvin Tan : +65 9337 9909 | {" "}
                <a href="mailto:melvin&#64;me.com">melvin.tan@me.com</a>
              </li>
          </ul>
        </div> <br></br> 
      </section>

    </Layout>
  );
}

export default TeamPage;
