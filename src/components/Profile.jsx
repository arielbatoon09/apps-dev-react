import Button from "./Button";

function Profile({ data }) {
  return (
    <div className="cmp-profile">
      <div className="cmp-profile_header">
        <img
          className="avatar"
          src={data.imageSource}
          alt={data.name}
        />
        <h1>{data.name}</h1>
        <p>{data.role}</p>
      </div>
      <p className="cmp-profile_description">{data.description}</p>
      
      <Button text={data.buttonText} color={data.buttonColor} />
    </div>
  )
}

export default Profile;