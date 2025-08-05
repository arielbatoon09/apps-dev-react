import Button from "./Button";

function Profile() {
  const person = {
    name: "Boss Malupiton",
    avatar: "/arayko.jpeg",
    role: "Content Creator",
    description: "Joel Ravanera <b>(Boss)</b>, or known online as Malupiton, is a Filipino social media personality and entertainer. He known for his witty and relatable content in online platforms such as Facebook, TikTok, and YouTube.",
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

      {/* If returns a vaue with a pure string */}
      <p>{person.description}</p>

      {/* If returns a value with a string */}
      <p className="cmp-profile_description" dangerouslySetInnerHTML={{ __html: person.description }} />
      <Button />
    </div>
  )
}

export default Profile;