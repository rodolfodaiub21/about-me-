import React,{useState} from "react";
import boxingimg from "../assets/Boxing.jpeg"
import Fut from "../assets/Fut.jpeg"
import Hikimg from "../assets/Hiking.jpeg"
import musicimg1 from "../assets/Music1.jpeg"
import musicimg2 from "../assets/Music2.jpeg"
const Hiking = () =>{
  return(
    <div>
    <img src={Hikimg} alt="Gym" className="w-full rounded-lg shadow-lg" />
    </div>
  );
};

const Boxing = () =>{
  return(
      <div>
    <img src={boxingimg} alt="Gym" className="w-full rounded-lg shadow-lg" />
      </div>
  );
};

const Fot = () => {
  return(
      <div>
    <img src={Fut} alt="Gym" className="w-full rounded-lg shadow-lg" />
      </div>

  );
};
const Music1 = () => {
  return(
    <div>
    <img src={musicimg1} alt="Gym" className="w-full rounded-lg shadow-lg" />
      </div>
  )
};

const Music2 = () => {
  return(
    <div>
    <img src={musicimg2} alt="Gym" className="w-full rounded-lg shadow-lg" />
      </div>
  )
}

const Hobbies = () => {
  const [index,setIndex]=useState(0);
  const [index1,setIndex1]=useState(0);
  const images_exc=[<Boxing/>,<Hiking/>,<Fot/>]
  const images=[<Music1/>,<Music2/>]

  const next_exc = () => setIndex((prev)=> (prev+1)%images_exc.length);
  const next = () => setIndex1((prev1)=> (prev1+1)%images.length);
  return (
    <div className="relative top-25 left-110 bg-50 text-gray-800 font-sans min-h-screen p-6 max-w-3xl mx-auto">
      <section className="mb-4">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Hobbies</h1>
        <p>Here, I’ll share some of my favorite hobbies and activities that bring me joy and help me stay balanced in life. Whether it’s exploring new interests, practicing skills I’m passionate about, or simply unwinding with activities I love, these hobbies are an important part of who I am and how I recharge my energy.  </p>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Hiking  and excercise</h2>
        <p>I really enjoy exercising as it helps me stay focused and disciplined while allowing me to track my progress. I like hiking for its mental benefits, and I also enjoy swimming and boxing. Combined with gym workouts, these activities help me grow as a well-rounded athlete. I’ve also played football since childhood, mainly as a way to connect and have fun with friends.</p>

        <div className="mb-4">{images_exc[index]}</div>
        <button onClick={next_exc} className="px-4 py-2 m-5 bg-green-600 rounded">➤</button>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">Music</h2>
        <p>I really enjoy playing the guitar and singing—it’s a unique way to connect not only with others but also with yourself. For me, it's a powerful form of self-expression that allows the soul to speak without words.I usually play and sing at university events or birthday parties—not only as a way to earn some extra money, but also because I genuinely enjoy it.</p>
      </section>
      <section className="mb-4">
          <div className="mb-4">{images[index1]}</div>
        <button onClick={next} className="px-4 py-2 m-5 bg-green-600 rounded">➤</button>
      </section>
    </div>
  );
};

export default Hobbies; 