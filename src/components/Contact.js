import React from 'react';

//CONTACT PAGE profilelink list (links to my other professional profiles)
const LinkList = () => {
    const profiles = [
        {name: 'gmail', url: "mailto:estesjeremy96@gmail.com", imgType: 'png'},
        {name: 'github', url: "https://github.com/jermestes", imgType: 'png'},
        {name: 'linkedin', url: "https://www.linkedin.com/in/jeremy-estes/", imgType: 'png'}
    ];
    
    return (
        <ul className="main_sub-secs profile_links-container">
            {profiles.map(profile => {
                return(
                    <li key={profile.name}>
                        <a target ="_blank" rel="noopener noreferrer" href={profile.url} className="profile_links">
                            <img src={require(`../assets/profile_icons/${profile.name}-logo.${profile.imgType}`)} alt={profile.name} />
                        </a>
                    </li>
                )                
            })}            
        </ul>
    );
};

export default LinkList;