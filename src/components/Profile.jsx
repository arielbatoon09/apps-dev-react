import Button from "./Button";

function Profile({ personData }) {
  return (
    <div className="cmp-profile">
      <div className="cmp-profile_header">
        <img
          className="avatar"
          src={personData.avatar}
          alt={personData.name}
        />
        <h1>{personData.name}</h1>
        <p>{personData.role}</p>
      </div>

      {/* If returns a vaue with a pure string */}
      <p className="cmp-profile_description">{personData.description}</p>

      {/* If returns a value with a string */}
      {/* <p dangerouslySetInnerHTML={{ __html: personData.description }} /> */}
      
      <Button buttonLabel={personData.buttonLabel} />

    </div>
  )
}

export default Profile;