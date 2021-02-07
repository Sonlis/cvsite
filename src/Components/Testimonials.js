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
               <img src="images/cvsite-pic1.png" alt="Descriptive"></img>
               </div>
               
            <p><br />This website is as much as a CV as a proof of my knowledge. It is deployed in my training environment.
               I try to maitain this environment as close as real world sites, even though somes things have to be missing - advanced logging/monitoring, environments separation- as it would start to be costly and my landlord would not like the electricity bill.
               <br />It is a bare metal vanilla kubernetes hosted on raspberries PI, running on Talos operating system: a k8s only -even shell and SSH are removed- operating system. Kong acts as the Ingress Controller, as it comes with very relevant features (rate limiting, integration with Prometheus). 
               <br />Bare metal clusters still need load balancers, and Metallb is the solution. It provides private IP addresses from a configured range.
               <br />ArgoCD is the gitOps solution I chose over FluxCD and Tekton Pipelines after testing all 3. The CI/CD flow is described below.
               <br />Other components are not displayed on this picture, such as an Admission controller or Vault. But I am always opened to talk about it! </p>

               <img src="images/cvsite-pic2.png" alt="Descriptive"></img>
            <p><br />The CI/CD flow I implemented is as follow: whenever a push is made to github, CircleCI tests and builds a docker images, pushes is to Dockerhub and updates the Helm repository's chart with the new image tag.
            ArgoCD is configured to look for updates on the Helm repository: it then perfoms an Helm update in the cluster.



            </p>

            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
