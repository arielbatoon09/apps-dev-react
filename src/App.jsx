import Profile from "./components/Profile";

function App() {
  const person1 = {
    name: "Boss Malupiton",
    avatar: "/arayko.jpeg",
    role: "Content Creator",
    description: "Joel Ravanera (Boss), or known online as Malupiton, is a Filipino social media personality and entertainer. He known for his witty and relatable content in online platforms such as Facebook, TikTok, and YouTube.",
    buttonLabel: "Check Boss Malupiton",
  };

  const person2 = {
    name: "Benjamin",
    avatar: "/benjamin.jpeg",
    role: "Content Creator",
    description: "Skrt",
    buttonLabel: "Check Benjamin",
  };

  return (
    <div className="center-ui">
      <Profile personData={person1} />
      <Profile personData={person2} />
    </div>
  )
}

export default App;