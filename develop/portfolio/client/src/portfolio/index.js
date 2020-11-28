import React, {useState} from "react";
import { Modal, Button } from 'react-bootstrap'
import repolinks from "../repolinks/repolinks"
import breakaway from './images/breakaway.JPG'
import codingquiz from './images/codingquiz.JPG'
import discoverserenity from './images/discoverserenity.jpg'
import employeedb from './images/employeedb.jpg'
import notetaker from './images/notetaker.JPG'
import weather from './images/weather.JPG'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";



function Portfolio() {
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [appTitle, setAppTitle] = useState('App Title Here')
  const [repoUrl, setRepoUrl] = useState('')
  const [deployUrl, setDeployUrl] = useState('')
  

  function populateModal(e) {
    console.log(repolinks[e])
    setAppTitle(repolinks[e].name)
    setRepoUrl(repolinks[e].repoLink)
    setDeployUrl(repolinks[e].deployed)
    
    handleShow()
  }

  return(
  <div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{appTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href={repoUrl}>Link to GitHub Repo</a>
          <br></br>
          <a href={deployUrl}>Link to Deployed Application</a>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>

    <div className="content rounded center">

    <h2>Portfolio</h2>

    <div className="container">
      <div className="row">
    <img 
    className="col-sm-6 img-margin"
    src={breakaway} 
    onClick={e=> populateModal(e.target.id)}
    alt = "Breakaway"
    height='300' 
    width='150' 
    id='2'/>

    <img className="col-sm-6 img-margin" 
    src={codingquiz}
    onClick={e=> populateModal(e.target.id)}
    alt = "Coding Quiz"
    height='300' 
    width='150' 
    id='1'/>

    </div>

    <div className="row">
    <img className="col-sm-6 img-margin"
    src={discoverserenity}
    onClick={e=> populateModal(e.target.id)}
    alt = "DiscoverSerenity"
    height='300' 
    width='150' 
    id='4'/>

    <img className="col-sm-6 img-margin"
    src={employeedb}
    onClick={e=> populateModal(e.target.id)}
    alt = "EmployeeDB"
    height='300' 
    width='150' 
    id='0'/>

    </div>
 
    <div className="row">
    <img className="col-sm-6 img-margin"
    src={notetaker}
    onClick={e=> populateModal(e.target.id)}
    alt = "NoteTaker"
    height='300' 
    width='150' 
    id='5'/>

    <img className="col-sm-6 img-margin"
    src={weather} 
    onClick={e=> populateModal(e.target.id)}
    alt = "Weather Dashboard"
    height='300' 
    width='150' 
    id='3'/>
    </div>
    </div>
    </div>
    
    </div>
  )
  }
export default Portfolio;
    