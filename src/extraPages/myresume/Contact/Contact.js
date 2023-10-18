
import './Contact.css'
import React from 'react'
import {BsWhatsapp,BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Contact = () => {
return(

<>
<div className='contact-container'>
<h2 className="col-12 mt-3 mb-1 text-center text-uppercase h2">
    Contact
</h2>
<ul className='contact' >

                   <li>
                        <Link to="https://github.com/geniusrks1" target="_blank">
                            <BsGithub/>
                        </Link>
                    </li>




                <li>
                        <Link to="https://www.linkedin.com/in/rohit-kumar-483091161/" target="_blank">
                           <BsLinkedin/>
                        </Link>
                      
                    </li>

                    <li>
                        <Link to="https://wa.me/+917007814974" target="_blank">
                            <BsWhatsapp/>
                        </Link>
                    </li>

                    <li>
                        <Link to="mailto: gmrohitkumar@gmail.com" target="_blank">
                            <AiOutlineMail/>
                        </Link>
                    </li>

                    <li>
                        <Link to="tel:+917007814974">
                            <BiPhoneCall/>
                        </Link>
                    </li>

                   
                </ul>
                </div>
</>
)

}


export default Contact