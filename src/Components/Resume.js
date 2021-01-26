import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      //var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      //var skills = this.props.data.skills.map(function(skills){
      //  var className = 'bar-expand '+skills.name.toLowerCase();
      //  return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      //})
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Main skills</span></h1>
         </div>
         <div className="skillstable">

         <table>
<tr>
    <th><h3>Cloud</h3></th>
    <th><h3>Microservices</h3></th> 
    <th><h3>CI/CD</h3></th>
  </tr>
  <tr>
    <td>Azure AKS, DevOps, Blob storage, VMs, Functions</td>
    <td>Kubernetes</td> 
    <td>GitOps (ArgoCD, Tekton Pipelines)</td>
  </tr>
  <tr>
    <td>AWS EKS, EC2, Lambda</td>
    <td>Hashicorp products</td> 
    <td>Jenkins</td>
  </tr>
  <tr>
    <td>GCP GKE</td>
    <td>Prometheus / Grafana</td>
    <td>Helm</td>
  </tr>
  <tr>
    <td>Terraform</td>
    <td>Admission Controller</td>
    <td>CircleCI</td>
  </tr>
  <tr>
    <td>Ingress Controller</td>
    <td>Service Mesh</td>
    <td></td>
  </tr>
</table>
</div>

<p><br /><h4>Other skills:</h4><b>Languages</b>: Golang, Python, Bash <br /> <b>Networking</b>: CCNA routing and switching 1&2, DNS, HTTP(S) <br /> <b>IoT</b>: Raspberry Pi, ESP32, ESP8266<br /><b>Virtualization</b>: VMware, Proxmox<br /><b>Linux</b>: Ubuntu, Debian, ArchLinux, TinyCore</p>
				</div>
   </section>
    );
  }
}

export default Resume;
