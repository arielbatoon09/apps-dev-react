import Profile from "./components/Profile";

function App() {
  const personData1 = {
    imgSrc: "/malupiton.jpeg",
    name: "Boss Malupiton",
    role: "Content Creator",
    description: "Joel Ravanera, or known online as Malupiton, is a Filipino social media personality and entertainer. He known for his witty and relatable content in online platforms such as Facebook, TikTok, and YouTube.",
    buttonLabel: "Visit Malupiton",
    buttonColor: "green",
  }

    const personData2 = {
    imgSrc: "/ungart.jpeg",
    name: "Ungart",
    role: "Business Owner",
    description: "A Cebuano content creator / business owner of Underground Apparel.",
    buttonLabel: "Visit Ungart",
    buttonColor: "red",
  }

  return (
    <div className="center-ui">
      <Profile personData={personData1} />
      <Profile personData={personData2} />
    </div>
  )
}

export default App;