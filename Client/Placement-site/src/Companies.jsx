import React from "react";


    const companies = [
  { name: "Google", logo: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" },
  { name: "Amazon", logo: "https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" },
  { name: "Microsoft", logo: "https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg" },
  { name: "Facebook", logo: "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" },
  { name: "Apple", logo: "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg" },
  { name: "Netflix", logo: "https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" },
  { name: "Adobe", logo: "https://www.logo.wine/a/logo/Adobe/Adobe-Logo.wine.svg" },
  { name: "IBM", logo: "https://www.logo.wine/a/logo/IBM/IBM-Logo.wine.svg" },
  { name: "Intel", logo: "https://www.logo.wine/a/logo/Intel/Intel-Logo.wine.svg" },
  { name: "Oracle", logo: "https://www.logo.wine/a/logo/Oracle_Corporation/Oracle_Corporation-Logo.wine.svg" },
  { name: "Tesla", logo: "https://www.logo.wine/a/logo/Tesla,_Inc./Tesla,_Inc.-Logo.wine.svg" },
  { name: "Uber", logo: "https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" },
  { name: "Airbnb", logo: "https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg" },
  { name: "Spotify", logo: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg" },
  { name: "Twitter", logo: "https://www.logo.wine/a/logo/Twitter/Twitter-Logo.wine.svg" },
  { name: "LinkedIn", logo: "https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" },
  { name: "Cisco", logo: "https://www.logo.wine/a/logo/Cisco_Systems/Cisco_Systems-Logo.wine.svg" },
  { name: "HP", logo: "https://www.logo.wine/a/logo/Hewlett-Packard/Hewlett-Packard-Logo.wine.svg" },
  { name: "Salesforce", logo: "https://www.logo.wine/a/logo/Salesforce.com/Salesforce.com-Logo.wine.svg" },
  { name: "PayPal", logo: "https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg" },
  { name: "Flipkart", logo: "https://www.logo.wine/a/logo/Flipkart/Flipkart-Logo.wine.svg" },
  { name: "Walmart", logo: "https://www.logo.wine/a/logo/Walmart/Walmart-Logo.wine.svg" },
  { name: "Capgemini", logo: "https://www.logo.wine/a/logo/Capgemini/Capgemini-Logo.wine.svg" },
  { name: "Deloitte", logo: "https://www.logo.wine/a/logo/Deloitte/Deloitte-Logo.wine.svg" },
  { name: "Infosys", logo: "https://www.logo.wine/a/logo/Infosys/Infosys-Logo.wine.svg" },
];


function Companies(){
 return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
        Our Recruiters
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6"
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 p-3 shadow-inner">
              <img
                src={company.logo}
                alt={company.name}
                className="object-contain h-16 w-16"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-700">{company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies