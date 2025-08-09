import Button from "./Button";

function Profile({ personData }) {
  return (
    <div className="cmp-profile">
      <div className="cmp-profile_header">
        <img
          className="avatar"
          src={personData.imgSrc}
          alt={personData.name}
        />
        <h1>{personData.name}</h1>
        <p>{personData.role}</p>
      </div>
      <p className="cmp-profile_description">{personData.description}</p>

      <Button buttonLabel={personData.buttonLabel} color={personData.buttonColor} />
    </div>
  )
}

export default Profile;