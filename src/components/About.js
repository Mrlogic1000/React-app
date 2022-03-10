import React from "react";

import "../about.css";
import about from "../images/p11.png";
import Layout from "./Layout";

export default function About() {
  return (
    <Layout>
      <div className="about">
        <div className="col">
          <div className="content">
            <h1>The divinehabitationconsult system</h1>
            <p>
              One thing 2020 taught us, it was working remotely! To save costs
              we do the consultation of your requirements online via video chat
              or phone, which ever you prefer. We went one better with this and
              created an instant pricing system in which you can specify which
              extension you want, get an instant fixed price then and there.
            </p>
            <p>
              The next thing we created was a guide for clients to be able to
              measure their houses, once appointed we will send you a step by
              step guide, along with templates of your house, simply print it or
              if you have a tablet it can be done on there.
            </p>

            <p>
              The template of your house is created by us in advance and details
              which measurements you need to take, this is filled in by the
              client, and sent to us along with some pictures, then we get to
              work. And don’t worry if you need any help, we are here to answer
              any questions you may have along the way. The whole process takes
              around 2 hours and saves you approximately £250. If you are still
              not convinced, then we can carry out the survey for you.
            </p>
          </div>
        </div>
        
      </div>
      <div className="about">
        <div className="col">
          <div className="content">
            <h1>The divinehabitationconsult system</h1>
            <p>
              One thing 2020 taught us, it was working remotely! To save costs
              we do the consultation of your requirements online via video chat
              or phone, which ever you prefer. We went one better with this and
              created an instant pricing system in which you can specify which
              extension you want, get an instant fixed price then and there.
            </p>
            <p>
              The next thing we created was a guide for clients to be able to
              measure their houses, once appointed we will send you a step by
              step guide, along with templates of your house, simply print it or
              if you have a tablet it can be done on there.
            </p>

            <p>
              The template of your house is created by us in advance and details
              which measurements you need to take, this is filled in by the
              client, and sent to us along with some pictures, then we get to
              work. And don’t worry if you need any help, we are here to answer
              any questions you may have along the way. The whole process takes
              around 2 hours and saves you approximately £250. If you are still
              not convinced, then we can carry out the survey for you.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="img">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
