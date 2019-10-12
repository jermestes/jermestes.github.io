import React, { Component } from 'react';
import styled from 'styled-components';

const Emailform = styled.form`
    display: flex;
    flex-flow: column wrap;
    padding: 1rem;
    @media screen and (min-width: $screen-breakpoint1) {
        text-align: center;
        padding: 2rem 4rem 0 0; 
        width: 30rem;
    }
    >* {
        margin-bottom: 2rem;
        border-width: 0 0 .1rem 0;
    }
    textarea {
        height: 10rem;
    }
    button:hover {
        background-color: white;
        border: .125rem solid black;
        color: black;
    }
`;

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="main_sub-secs form-container">
                    <h2>Send A Message</h2>
                    <Emailform action="send.php" method="POST">       
                        <input name="sender-name" type="text" placeholder="Name" />
                        <input name="sender-email" type="email" placeholder="Email" />
                        <textarea name="sender-message" placeholder="Your message"></textarea>
                        <button className="btn contact-btn" type="submit">Send</button>
                    </Emailform>
                </div>

                <ul className="main_sub-secs profile_links-container">
                    <li><a target ="_blank" rel="noopener noreferrer" href="https://codepen.io/jermestes" className="profile_links">
                        <img src="images/profile_icons/codepen/Button-Black-Large.png" 
                        alt="" className="profile_links_images" />Codepen</a>
                    </li>

                    <li><a target ="_blank" rel="noopener noreferrer" href="https://dribbble.com/jermestes" className="profile_links">
                        <img src="images/profile_icons/dribbble/dribbble-ball-icon.png" 
                        alt="" className="profile_links_images" />Dribbble</a>
                    </li>

                    <li><a target ="_blank" rel="noopener noreferrer" href="https://github.com/jermestes" className="profile_links">
                        <img src="images/profile_icons/github/Github-Mark/PNG/GitHub-Mark-120px-plus.png" 
                        alt="" className="profile_links_images" />Github</a>
                    </li>

                    <li><a target ="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jeremy-estes/" className="profile_links">
                        <img src="images/profile_icons/linkedin/iconfinder_linkedin_circle_color_107178.png" 
                        alt="" className="profile_links_images" />LinkedIn</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Contact;