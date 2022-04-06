import React from 'react'

function Profile({Person}) {
  return (
    <div>
    <img className="imgProfil" src={Person.imgSrc} alt="profile pic"></img>
      <h3 className="profil name">{Person.fullName}</h3>
      <h3 className="profil bio">{Person.bio}</h3>
      <h3 className="profil prof">{Person.profession}</h3>
    </div>
  )
}

export default Profile