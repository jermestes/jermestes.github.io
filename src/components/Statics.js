import React from 'react';

//The CONTACT PAGE email form
const EmailForm = () => {
    return (
        <div className="main_sub-secs form-container">
            <h2>Send A Message</h2>
            <form action="send.php" method="POST">       
                <input name="sender-name" type="text" placeholder="Name" required/>
                <input name="sender-email" type="email" placeholder="Email" required/>
                <textarea name="sender-message" placeholder="Your message" required></textarea>
                <button className="btn contact-btn" type="submit">Send</button>
            </form>
        </div>
    );
};

//The CONTACT PAGE link list (links to my other professional profiles)
const LinkList = () => {
    const profiles = [
        {name: 'codepen', url: "https://codepen.io/jermestes", imgType: 'png'},
        {name: 'dribbble', url: "https://dribbble.com/jermestes", imgType: 'svg'},
        {name: 'github', url: "https://github.com/jermestes", imgType: 'png'},
        {name: 'linkedin', url: "https://www.linkedin.com/in/jeremy-estes/", imgType: 'png'}
    ];
    
    return (
        <ul className="main_sub-secs profile_links-container">
            {profiles.map(profile => {
                return(
                    <li><a target ="_blank" rel="noopener noreferrer" href={profile.url} className="profile_links">
                        <img src={require(`../assets/profile_icons/${profile.name}-logo.${profile.imgType}`)} alt={profile.name} />
                    {profile.name}</a>
                    </li>
                )                
            })}            
        </ul>
    );
};

export default LinkList;
export {EmailForm};