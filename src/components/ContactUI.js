import React from 'react';

const EmailForm = () => {
    return (
        <div className="main_sub-secs form-container">
            <h2>Send A Message</h2>
            <form action="send.php" method="POST">       
                <input name="sender-name" type="text" placeholder="Name" />
                <input name="sender-email" type="email" placeholder="Email" />
                <textarea name="sender-message" placeholder="Your message"></textarea>
                <button className="btn contact-btn" type="submit">Send</button>
            </form>
        </div>
    );
};

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