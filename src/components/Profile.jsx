import Button from "./Button";

function Profile() {
  return (
    <div className="cmp-profile">
      <div className="cmp-profile_header">
        <h1>Ariel Batoon</h1>
        <p>Software Developer</p>
      </div>
      <p className="cmp-profile_description">Hi there, I'm Ariel. I'm a Software Developer passionate on developing high-performance applications that seamlessly bridge web and mobile experiences.</p>
      <Button />
    </div>
  )
}

export default Profile;