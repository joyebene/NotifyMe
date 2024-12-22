// import logo from "./"
import Link from "next/link";

function Home() {
  return (

    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <img src="logo3.png" alt="App logo" className="App-logo m-auto mb-9" />

          <div className="text">
            <h1 className="App-name font-bold text-5xl my-4">Notify<span className="gold">Me</span> App</h1>
            <p className="leading-tight my-3">Be notified about an important event or work. </p>
          
            <Link href="/route/home"  className="App-link mt-3"> 
              Get Started!
            </Link>
          
          </div>
        </div>
      </header>
    </div>
    
  );
}

export default Home;
