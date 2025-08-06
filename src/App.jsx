import Profile from "./components/Profile";

function App() {
  const person1 = {
    name: "Zayn Malik",
    role: "Artist",
    avatar: "/zayn.jpg",
    description: "Zayn Malik, born Zain Javadd Malik on January 12, 1993, is an English singer and songwriter. He rose to fame as a member of the boy band One Direction, formed on The X Factor in 2010. He later embarked on a successful solo career, adopting the mononym Zayn.",
  };

  const person2 = {
    name: "Boss Malupiton",
    role: "Content Creator",
    avatar: "/malupiton.jpeg",
    description: "Joel Ravanera, or known online as Malupiton, is a Filipino social media personality and entertainer. He known for his witty and relatable content in online platforms such as Facebook, TikTok, and YouTube.",
  };

  return (
    <div className="center-ui">
      <Profile data={person1} />
      <Profile data={person2} />
    </div>
  )
}

export default App;