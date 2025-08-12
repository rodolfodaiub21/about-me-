import React from "react"
import logo from '../assets/profile.jpeg'
const Contact =()=>{
    return <div className="bg-50 text-gray-800 font-sans min-h-screen p-6 max-w-3xl mx-auto relative top-25 left-110">
        <section className="mb-4">

        <h1 className="text-4xl font-bold text-green-700 mb-4">Rodolfo Daiub</h1>
        <p>
            Welcome to my personal page!<br/> I’m Rodolfo Daiub,a proactive Computer Science student with a passion for turning ideas into impactful projects. Since childhood, I’ve been driven by the desire to 
            create initiatives that bring value and well-being to the people around me.
            Today, my curiosity fuels my work in cybersecurity and finance, 
            while my growing fascination with artificial intelligence 
            pushes me to explore new frontiers in technology.
            <img
                  src={logo} alt="Parity check interface"
                  className="w-[400px] h-[500px] mb-6 rounded-lg shadow-md"
                  
                />
        </p>
        
        </section>
        <section>

        </section>

    </div>
}; export default Contact