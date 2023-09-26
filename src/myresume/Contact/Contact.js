
import './Contact.css'
import React from 'react'
import {BsWhatsapp,BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Contact = () => {
return(

<>
<div id='contact'>
<ul className='contact' >

                   <li>
                        <Link to="https://github.com/geniusrks1" target="_blank">
                            <BsGithub/>
                        </Link>
                    </li>




                <li>
                        <a href="https://www.linkedin.com/in/rohit-kumar-483091161/" target="_blank">
                           <BsLinkedin/>
                        </a>
                      
                    </li>

                    <li>
                        <Link to="https://wa.me/+917007814974" target="_blank">
                            <BsWhatsapp/>
                        </Link>
                    </li>

                    <li>
                        <a href="mailto: gmrohitkumar@gmail.com" target="_blank">
                            <AiOutlineMail/>
                        </a>
                    </li>

                    <li>
                        <a href="tel:+917007814974">
                            <BiPhoneCall/>
                        </a>
                    </li>

                   
                </ul>
                </div>
</>
)

}


export default Contact