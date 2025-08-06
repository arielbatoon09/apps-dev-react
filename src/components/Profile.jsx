import Button from "./Button";

function Profile({ data }) {
  return (
    <div className="cmp-profile">
      <div className="cmp-profile_header">
        <img
          className="avatar"
          src={data.avatar}
          alt={data.name}
        />
        <h1>{data.name}</h1>
        <p>{data.role}</p>
      </div>

      {/* If returns a vaue with a pure string */}
      <p className="cmp-profile_description">{data.description}</p>

      {/* If returns a value with a string */}
      {/* <div dangerouslySetInnerHTML={{ __html: data.description }} /> */}

      {/* Button component */}
      <Button label="Learn more" />
    </div>
  )
}

export default Profile;