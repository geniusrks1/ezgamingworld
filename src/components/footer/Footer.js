import {FaFacebookF,FaGoogle,FaInstagram,FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {RiTwitterXFill} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

import React from 'react';


const Footer = () => {
  return (
    <>
<footer className="bg-dark text-center text-white">
 
  <div className="container p-4">
  
    <section className="mb-4">
    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
       <FaFacebookF/>
      
      </a>

    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
    ><RiTwitterXFill/> </a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
            <FaGoogle/>
        </a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        > <FaInstagram/>
        </a>

      
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
            <FaLinkedinIn/>
        </a>

     
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        >
            <FaGithub/>
        </a>
    </section>
    

  
    <section className="">
      <form action="">
       
        <div className="row d-flex justify-content-center">
         
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for play</strong>
            </p>
          </div>
          
         
        </div>
        
      </form>
    </section>
   

  
    <section className="mb-4">
      <p>
      ezgamingworld - An Ultimate eSports Platform. Participate in the Online Multiplayer Tournaments or Contests & Win Cash Prizes, Rewards. Currently supports Battlegrounds Mobile India, Free Fire and COD Mobile. Upcoming Games on PlayerZon: Fortnite, Valorant, etc.
      </p>
    </section>
   

  
    <section className="">
    
      <div className="row">
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          {/* <h5 className="text-uppercase">Links</h5> */}

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">About Us</a>
            </li>
            <li>
              <a href="#!" className="text-white">How It Works?</a>
            </li>
            <li>
              <a href="#!" className="text-white">Organize your Event</a>
            </li>
            <li>
              <a href="#!" className="text-white">Contact Us</a>
            </li>
          </ul>
        </div>
       
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          {/* <h5 className="text-uppercase">Links</h5> */}

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Help & FAQ</a>
            </li>
            <li>
              <a href="#!" className="text-white">Fair Play</a>
            </li>
            <li>
              <a href="#!" className="text-white">Return and Refund Policy</a>
            </li>
            <li>
              <a href="#!" className="text-white">DisclaimerPrivacy</a>
            </li>
          </ul>
        </div>
       






        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          {/* <h5 className="text-uppercase">Links</h5> */}

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">PolicyTerms and ConditionsIntellectual</a>
            </li>
            <li>
              <a href="#!" className="text-white"> Career</a>
            </li>
            <li>
              <a href="#!" className="text-white">PressAdvertise With Us</a>
            </li>
           
            <li>
              <NavLink to='services' className="text-white">My Dummy Projects</NavLink>
            </li>
              
            
          </ul>
        </div>
     
     
          


    
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        {/* <h5 className="text-uppercase">Links</h5> */}
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Home</a>
            </li>
            <li>
              <a href="#!" className="text-white">Tournament</a>
            </li>
            <li>
              <a href="#!" className="text-white">Rewards</a>
            </li>
            <li>
              <a href="#!" className="text-white">Latest News</a>
            </li>
          </ul>
        </div>
      
      </div>
     
    </section>
   
  </div>
  
 
  <div classNameName="text-center p-3" >
    © 2020 Copyright:
    <a className="text-white" href="https://ezgamingworld.com/">ezgamingworld.com</a>
  </div>
 
</footer>



















    </>
  );
}

export default Footer;
