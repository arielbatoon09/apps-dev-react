import Button from "./Button";

function Profile() {
  const person = {
    name: "Zayn Malik",
    role: "Artist",
    avatar: "/zayn.jpg",
    description: "Zayn Malik, born Zain Javadd Malik on January 12, 1993, is an English singer and songwriter. He rose to fame as a member of the boy band One Direction, formed on The X Factor in 2010. He later embarked on a successful solo career, adopting the mononym Zayn.",
  };

  return (
    <div className="cmp-profile">
      <div className="cmp-profile_header">
        <img
          className="avatar"
          src={person.avatar}
          alt={person.name}
        />
        <h1>{person.name}</h1>
        <p>{person.role}</p>
      </div>
      <p className="cmp-profile_description">{person.description}</p>
      <Button />
    </div>
  )
}

export default Profile;