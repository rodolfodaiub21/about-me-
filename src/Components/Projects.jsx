import React, {useState} from "react";
import logo from '../assets/parity.png'
const Wazuh_active_response =  () => {
    return ( <div className="bg-50 text-gray-800 font-sans min-h-screen p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-green-700">
        Wazuh Alert to iTop Incident Synchronization
      </h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">Overview</h2>
        <p>
          This script integrates Wazuh alerts with iTop by creating incidents in iTop based on received alert data.
          It processes JSON input from Wazuh, validates the content, and uses the iTop API to create incidents.
          Logs are written to a file for debugging and tracking purposes.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Reads and processes JSON alert data from stdin.</li>
          <li>Validates commands (add, delete, etc.).</li>
          <li>Logs all actions and errors to a specified log file.</li>
          <li>Creates incidents in iTop using its API with customizable fields.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">Requirements</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Python 3</li>
          <li>cURL installed on the system</li>
          <li>Access to the iTop API with valid credentials</li>
          <li>Wazuh active-response configured to call this script</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">Configuration</h2>

        <h3 className="text-xl font-medium mt-4 mb-1">Log File Path</h3>
        <p>The log file path is defined based on the operating system:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Windows:</strong>{" "}
            <code className="bg-gray-100 p-1 rounded">
              C:\Program Files (x86)\ossec-agent\active-response\active-responses.log
            </code>
          </li>
          <li>
            <strong>Linux:</strong>{" "}
            <code className="bg-gray-100 p-1 rounded">
              /var/ossec/logs/active-responses.log
            </code>
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-1 text-green-700">API Configuration</h3>
        <p>Replace the placeholders in the script with your iTop API details:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>ITOP_API_URL:</strong> URL of the iTop API.</li>
          <li><strong>ITOP_API_USER:</strong> API username.</li>
          <li><strong>ITOP_API_PASS:</strong> API password.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">How It Works</h2>
        <ol className="list-decimal pl-6 space-y-1">
          <li><strong>Alert Input:</strong> Reads JSON input from stdin, containing alert information.</li>
          <li><strong>Command Validation:</strong> Checks the command type (add, delete) and logs invalid commands.</li>
          <li><strong>Incident Creation:</strong> For "add" commands, builds a JSON object and sends it to the iTop API using curl.</li>
          <li><strong>Logging:</strong> Logs all actions and errors to the specified log file.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-green-700">Usage</h2>

        <h3 className="text-xl font-medium mb-1">Running the Script</h3>
        <p className="mb-2">
          This script is designed to be triggered by Wazuh as part of its active-response mechanism.
          For testing manually, you can run:
        </p>
        <pre className="bg-gray-100 p-4 rounded text-sm mb-4 overflow-auto">
          <code>python3 script_name.py &lt; input.json</code>
        </pre>

        <p>Or refer to the official Wazuh documentation:</p>
        <a
          href="https://documentation.wazuh.com/4.8/user-manual/capabilities/active-response/custom-active-response-scripts.html"
          className="text-green-600 hover:underline"
          target="_blank" rel="noopener noreferrer"
        >
          Wazuh Custom Active Response Scripts Documentation
        </a>
        <p>Link to the Github Repository: </p>
        <a
            href="https://github.com/rodolfodaiub21/wazuh-custom-active-response-and-ITOP"
            className="text-green-600 hover:underline"
            target= "_blank" rel="noopener noreferrer"
        >
            Github Repository
        </a>
      </section>
    </div>
  );
};
const Freshdesk_matcher = () => {

return(<div className="bg-50 text-gray-800 font-sans min-h-screen p-6 max-w-3xl mx-auto">
  <h1 className="text-4xl font-bold mb-6 text-green-700">
    Parity Check: SIEM & Freshdesk Event Comparison
  </h1>
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2 text-green-700">Overview</h2>
    <p>
      A simple interface that fetches events from Wazuh 
      (a SIEM) and compares them with tickets 
      in Freshdesk. 
      This project identifies whether each event in the SIEM has a corresponding ticket in Freshdesk, 
      streamlining incident management for cybersecurity operations.
    </p>
    <img
      src={logo} alt="Parity check interface"
      className="w-full h-auto mb-6 rounded-lg shadow-md"
    />
  </section>
  <section className="mb-6">
    <h2 className="text-2xl font-semibold mb-2 text-green-700">Features</h2>
    <p>
      <ul className="list-disc pl-6 space-y-1">  
      <li><strong>Fetch Wazuh events: </strong> Retrieves events from Wazuh servers for the last 24 hours.</li>
      <li><strong>Compare with Freshdesk Tickets:</strong> Matches Wazuh events with Freshdesk tickets based on agent names and rule IDs.</li>
      <li><strong>Display Results:</strong> Visualizes matched and unmatched events in a user-friendly interface.</li>
      <li><strong>Multi-threading:</strong> Performs Freshdesk comparisons in a separate thread to keep the interface responsive.</li>
      </ul>
    </p>
  </section>
  <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-2 text-green-700">Requirements</h2>
  <p> This Project has the following dependencies:</p>
  <p>
  <ul className="list-disc pl-6 space-y-1">  
    <li>Python 3.8+</li>
    Libraries:
    <li>requests</li>
    <li>tkinter</li>
    <li>urllib3</li>
    <li>pytz</li>
  </ul>
  </p>
  </section>
  <section>
    <a
    href="https://github.com/rodolfodaiub21/SIEM-FreshDesk-matcher"
    className="text-green-600 hover:underline"
    target= "_blank" rel="noopener noreferrer">  
    <p>Link to the Github repository </p>
    </a>
  </section>
</div>)
};
const CrediChain = () => {
  return(<div className="bg-50 text-gray-800 font-sans min-h-screen p-6 max-w-3xl mx-auto">
    <section className="mb-4">
    <h1 className="text-4xl font-bold text-green-700">CrediChain</h1>
    </section>
    <section className="mb-4">
    <p>
      
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Overview</h2>
      CrediChain is a demo decentralized lending platform developed as a final project for a university 
      course. It allows users to securely and transparently request
      and fund loans using blockchain technology.The platform simulates how smart
      contracts on the Ethereum network can facilitate peer
      -to-peer lending in a trustless, tamper-proof environment.
       Users  ' credit scores are updated based on their repayment behavior, promoting responsible financial activity.
      <br/>
      <a 
      href="https://www.youtube.com/watch?v=gXIgwWhgSNI&ab_channel=rodolfodaiub"
      className="text-green-600 hover:underline"
      target= "_blank" rel="noopener noreferrer"
      >
        Video Presentation link
        </a>
    </p>
    </section>
    <section className="mb-4">
      <h2 className="text-2xl font-semibold text-green-700 mb-4"> Features</h2>
      <p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Request and repay loans in installments</li>
          <li>Fund peer loans directly via the blockchain</li>
          <li>Dynamic credit scoring updated with every repayment</li>
          <li>Transparent and secure smart contracts on Ethereum</li>
          <li>Simulated loan terms for testing (10-minute intervals between installments)</li>
        </ul>
      </p>
    </section>
    <section className="mb-4">
      <h2 className="text-2xl font-semibold text-green-700">Technologies</h2>
      <p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Solidity: </strong> for smart contract development</li>
          <li><strong>Hardhat: </strong> for local development and deployment</li>
          <li><strong>Ether.js: </strong> for interacting with smart contracts from the frontend</li>
          <li><strong>React.js: </strong> for the web-based user interface</li>
          <li><strong>Ganache</strong> or <strong>Hardhat network</strong> for local blockchain simulation</li>
        </ul>
      </p>
    </section>

    <section className="mb-4">
      <h2 className="text-2xl font-semibold text-green-700">Smart Contract Overview</h2>
      <p>The main smart contract, CreditScore.sol, includes:<br/></p>
      <p>
        <ul className="list-disc pl-6 space-y-1">
          <li>A CreditScore system managed by the backend (owner)</li>
          <li>A Loan struct to handle:
Loan amount, interest, installments
Payment tracking and deadlines</li>
        </ul>
      </p>
      <p>Functions to:</p>
      <ul className="list-disc pl-6 space-y-1">
          <li>Request a loan</li>
          <li>Fund a loan</li>
          <li>Pay installments every 10 minutes (for testing)</li>
          <li>View available loans and personal loan history</li>
      </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-green-700">Set Up</h2>
        <p>Clone the repository:</p>
        <p>git clone https://github.com/yourusername/CrediChain.git<br/>cd CrediChain</p>
        
      </section>
      <section className="mb-4">
      <p>

      <ul className="list-disc pl-6 space-y-1">
    < li>Install dependencies: <code>npm install</code></li>
    <li>Compile the smart contracts: <code>npx hardhat compile</code></li>
    <li>Run a local blockchain: <code>npx hardhat node</code></li>
    <li>Deploy the contract (in a separate terminal): <code>npx hardhat run scripts/deploy.js --network localhost</code></li>
    <li>Start the frontend: <code>npm start<br/></code></li>
    </ul>
    <p>Github repository:</p>
    </p>
    <a
    href="https://github.com/rodolfodaiub21/SIEM-FreshDesk-matcher"
    className="text-green-600 hover:underline"
    target= "_blank" rel="noopener noreferrer">
    Credichain repository  </a>  
    
    </section>
  </div>

  )
};
const  Chatbox_encryption = () =>{
  return(<div className="bg-50 text-gray-800 font-sans min-h-screen p-6 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-green-700">
      Chatbox Encryption Simulator
    </h1>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">
        Overview
      </h2>
      <p>
        This project implements a secure real-time chat application using Python's socket and threading modules, with layered encryption (DES → 3DES → AES) applied to all messages sent between the client and server.
      </p>
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">Features</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Real-time chat between multiple clients</li>
        <li>Multi-layered encryption using DES, 3DES, and AES</li>
        <li>Base64 encoding for ciphertext transmission</li>
        <li>Threaded server handling concurrent clients</li>
      </ul>
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">Encryption method</h2>
      <p>Messages follow the encryption: 

      </p>

      <p>
      <ol className="list-disc pl-6 space-y-1">
        <li><strong>DES:</strong> ECB + PKCS7 padding</li>
        <li><strong>3DES: </strong> DES with two unique keys</li>
        <li><strong>AES:</strong>ECB + PKCS7 padding</li>
        <li>Encoded in Base64</li>
      </ol>
      </p>
      <p>Decryption follows the inverse order</p>
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">File structure</h2>
      <table>
        <tr>
          <th className="px-4 py-2">File</th>
          <th className="px-4 py-2">Description</th>
        </tr>
        <tr>
          <td className="px-4 py-2">
            Client.py
          </td>
          <td className="px-4 py-2">
             Sends encrypted messages to servers
          </td>
        </tr>
        <tr>
          <td className="px-4 py-2">Server.py</td>
          <td className="px-4 py-2"> Receives, decrypts, and broadcasts</td>
        </tr>
        <tr>
          <td className="px-4 py-2"> Get_key.py</td>
          <td className="px-4 py-2">Contains the encryption keys</td>
        </tr>
      </table>
    </section>
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-6 text-green-700"> How it works:</h2>
      <p>
        <ul>
          <li>Install dependencies</li>
          <li><strong>Run server:</strong> python server.py </li>
          <li><strong>Run client: </strong>python Client.py</li>   
        </ul>
      </p>
    </section>
    <section>
      <p>
        <a

          href="https://github.com/rodolfodaiub21/Chatbox_encryption-simulator"
          className="text-green-600 hover:underline"
          target="_blank" rel="noopener noreferrer"
        > Chatbox Encryption simulator repository
        </a>
      </p>
    </section>
    
  </div>)
};
const About_me = () => <div className= "p-4 bg-blue-100 rounded-xl">About me page</div>
const pages =[<Wazuh_active_response/>,<Freshdesk_matcher/>,<CrediChain/>,<Chatbox_encryption/>];


const Projects=()=>{
    const [index,setIndex]=useState(0);
    const next = () => setIndex((prev)=> (prev+1)%pages.length);
    const bef = () => setIndex((prev)=> (prev-1+pages.length)%pages.length);
        
    return (
        <div className="relative top-25 left-110">
          <button onClick={next} className="px-4 py-2 m-5 bg-yellow-600 rounded">Next</button>
          <div className="mb-4">{pages[index]}</div>  
        </div>

    );
};
export default Projects