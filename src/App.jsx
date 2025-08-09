import Profile from "./components/Profile";

function App() {
  const personData1 = {
    imageSource: "/malupiton.jpeg",
    name: "Boss Malupiton",
    role: "Content Creator",
    description: "Joel Ravanera, or known online as Malupiton, is a Filipino social media personality and entertainer. He known for his witty and relatable content in online platforms such as Facebook, TikTok, and YouTube.",
    buttonText: "Visit Malupiton",
    buttonColor: "red",
  }

  const personData2 = {
    imageSource: "/benjamin.jpeg",
    name: "Benjamin",
    role: "Staff of UA",
    description: "A staff of UA and working as a Quality checker at the same he is a content creator.",
    buttonText: "Visit Benjamin",
    buttonColor: "blue",
  }

  return (
    <div className="center-ui">
      <Profile data={personData1} />
      <Profile data={personData2} />
    </div>
  )
}

export default App;