import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'

const  Socials = () => {
  return (
    <>
                <div className="socials">
                    <ul className="sm-links">
                        <li className="sm-link"><a href="https://github.com/Rohxn16" target='_blank'><FaGithub/></a></li>
                        <li className="sm-link"><a href="https://www.linkedin.com/in/rohan-dey-20a835268/" target='_blank'><FaLinkedin/></a></li>
                        <li className="sm-link"><a href="https://twitter.com/rohxn_16" target='_blank'><FaTwitter/></a></li>
                        <li className="sm-link"><a href="https://www.youtube.com/channel/UC1SXYQoObI_xWGWyj9lOnHQ" target='_blank'><FaYoutube/></a></li>
                    </ul>
                </div>
    </>
  )
}

export default Socials