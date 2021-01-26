import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>How is this website hosted</span></h1>
            </div>

            <div className="ten columns flex-container">
               <img src="images/webarch.png" alt="Descriptive"></img>
               </div>
               
            <p><br />This website is as much as a CV as a proof of my knowledge, as well as a training environment.
               I try to maitain this environment as close as real world sites, even though somes things have to be missing -monitoring, dev/qa/staging/prod- as it would start to be costly and my landlord would not like the electricity bill.
               <br />It is a bare metal vanilla kubernetes HA cluster (fancy term that means 4 nodes), running on Talos operating system: a k8s only os -even shell and SSH are removed.

            </p>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
