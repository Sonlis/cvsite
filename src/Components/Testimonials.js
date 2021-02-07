import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

               <h2><span>How you reached the website</span></h2>
               <img src="images/webarch1.png" alt="Descriptive"></img>
               <p><br />Kong acts as the Ingress controller, and sends monitoring data to Prometheus. Metallb provides Kong with an IP address routable on the local network.</p>
               
               <h2><span>CI/CD flow</span></h2>
               <img src="images/cvsite-pic2.png" alt="Descriptive"></img>
            <p><br />Whenever a push is made to github, CircleCI tests and builds a docker images, pushes is to Dockerhub and updates the Helm repository's chart with the new image tag.
            ArgoCD is configured to look for updates on the Helm repository: it then perfoms an Helm update in the cluster.
            </p>
               <h2>Other tools to improve reliability / security</h2>
               <p><b>Service mesh</b>: Linkerd2</p>
               <p><b>Security</b>: Admission controller, Hashicorp Vault</p>
               <p><b>Storage management</b>: Rook / Ceph</p>
               <p><b>Being installed</b>: Velero</p>
               </div>
            </div>
   </section>
    );
  }
}

export default Testimonials;
