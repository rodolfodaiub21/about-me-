import React from "react";
const Resume = () =>{
    return (
    <div className="relative top-25 left-90 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold">Rodolfo Daiub</h1>
          <p className="text-lg text-gray-600">
            Information Engineering & CS student · Asunción, Paraguay
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-sm text-gray-700">
            <span>📞 +886 910 080 486</span>
            <span>✉ rodolfodaiub2003@gmail.com</span>
            <a
              href="https://linkedin.com/in/rodolfo-daiub-3a2b3928b"
              className="text-green-700 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rodolfo-daiub"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Professional Profile */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1">Professional Profile</h2>
          <p className="mt-2 text-gray-700">
            Computer Science exchange student at NTUST with a multidisciplinary focus on secure systems, AI
            applications, and emerging technologies. Interested in cybersecurity, blockchain, and quantitative trading,
            with a strong foundation in system design, data analysis, and intelligent automation.
          </p>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1">Work Experience</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-bold">Cybersecurity Analyst</h3>
              <p className="text-sm text-gray-600">Sekiura S.A.C.E.I — Asunción · Jun 2024 – Jan 2025</p>
              <ul className="list-disc pl-5 mt-1 text-gray-700">
                <li>Managed Linux servers and developed security automation scripts.</li>
                <li>Monitored security events in financial systems using SIEM tools.</li>
                <li>Automated threat analysis tasks with Python and Bash.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Cybersecurity Analyst Intern</h3>
              <p className="text-sm text-gray-600">Sekiura S.A.C.E.I — Asunción · Dec 2023 – Mar 2024</p>
              <ul className="list-disc pl-5 mt-1 text-gray-700">
                <li>Deployed and operated Kaspersky EDR & Security Cloud.</li>
                <li>Participated in threat detection and response initiatives.</li>
                <li>Earned certifications in endpoint security platforms.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Office Tools Instructor</h3>
              <p className="text-sm text-gray-600">Colegio Experimental Paraguay Brasil — Asunción · Nov 2021 – Feb 2022</p>
              <ul className="list-disc pl-5 mt-1 text-gray-700">
                <li>Trained teachers during pandemic in MS Office tools using structured modules.</li>
              </ul>
            </div>
            <div>
                <h3 className='font-bold'> English and Math private tutor</h3>
                <p className="text-sm text-gray-600">Independent — Asunción-Taipei · Nov 2021 –Now</p>
                <ul className="list-disc pl-5 mt-1 text-gray-700">
                <li>Guided private tutoring sessions individually and groups</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-bold">Universidad Politécnica Taiwán Paraguay</h3>
              <p className="text-sm text-gray-600">Bachelor’s in Computer Engineering · Feb 2023 – Jun 2027</p>
              <ul className="list-disc pl-5 mt-1 text-gray-700">
                <li>Top 4 ranked student upon admission. Currently in 6th semester.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Colegio Experimental Paraguay Brasil</h3>
              <p className="text-sm text-gray-600">Technical High School Diploma in IT · Mar 2019 – Oct 2021</p>
              <ul className="list-disc pl-5 mt-1 text-gray-700">
                <li>GPA: 92.5 · Honorable Mention for academic excellence.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1">Skills</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <li>Python, C++,react,C</li>
            <li>Linux/Ubuntu, VMware </li>
            <li>Windows Troubleshooting </li>
            <li>SIEM analysis & integration </li>
            <li>Languages: Spanish & English </li>
            <li>DB management:SQL,MongoDB,Firebase</li>
          </ul>
        </section>

        {/* Extracurricular */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-1">Extracurricular Activities</h2>
          <div className="mt-3">
            <h3 className="font-bold">President – Student Council</h3>
            <p className="text-sm text-gray-600">Universidad Politécnica Taiwán Paraguay · Elected Apr 2024</p>
            <ul className="list-disc pl-5 mt-1 text-gray-700">
              <li>Led initiatives for campus engagement and student welfare.</li>
              <li>Coordinated community outreach programs including:</li>
              <ul className="list-disc pl-8">
                <li>Fundraising campaigns to support families in vulnerable situations.</li>
                <li>Organizing recreational and educational activities for children in local communities.</li>
                <li>Participated in charity fundraising at Techo foundation</li>
              </ul>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}; export default Resume