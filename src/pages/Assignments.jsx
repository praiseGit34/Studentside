function Assignments() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <div className="scrollable-content">
          <section id="header" style={{textAlign: "center"}}>
            <h1>My Assignments</h1>
          </section>
          <div className="cards-container">
            <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
             <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
             <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
             <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
             <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
             <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
             <Card
              icon="bx bxs-building-house"
              heading="About"
              paragraph="Lorem ipsum dolor sit. Ea earum, deleniti maiores saepe voluptates voluptas aperiam quae!"
            />
           
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="./pages/dashboard" element={<Dashboard />} />
          <Route path="./pages/assignments" element={<Assignments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;