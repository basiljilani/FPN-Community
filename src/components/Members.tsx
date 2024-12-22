import React from 'react';

export default function Members() {
  const members = [
    { name: 'David Anderson', role: 'Chief Risk Officer', company: 'Global Bank Corp' },
    { name: 'Maria Rodriguez', role: 'Head of Innovation', company: 'FinTech Innovations' },
    { name: 'Alex Thompson', role: 'Compliance Director', company: 'RegTech Solutions' },
    { name: 'Sarah Chen', role: 'AI Research Lead', company: 'ML Finance' },
    { name: 'James Wilson', role: 'Chief Strategy Officer', company: 'Digital Banking Co' },
    { name: 'Emily Brown', role: 'Data Privacy Head', company: 'SecureBank' },
    { name: 'Michael Zhang', role: 'ML Engineering Director', company: 'AI Finance Systems' },
    { name: 'Lisa Patel', role: 'Digital Transformation Lead', company: 'Future Finance' },
    { name: 'Robert Kim', role: 'Blockchain Head', company: 'DeFi Solutions' },
    { name: 'Anna Kowalski', role: 'Risk Analytics Director', company: 'Smart Risk AI' },
    { name: 'Carlos Mendoza', role: 'Open Banking Lead', company: 'API Banking Tech' },
    { name: 'Sophie Laurent', role: 'Innovation Strategy', company: 'NextGen Finance' },
    { name: 'Thomas Weber', role: 'RegTech Solutions Head', company: 'Compliance AI' },
    { name: 'Nina Petrova', role: 'Payment Systems Director', company: 'Digital Pay Solutions' },
    { name: 'Richard Chang', role: 'Machine Learning Lead', company: 'Predictive Finance' },
    { name: 'Isabella Santos', role: 'Financial Inclusion Head', company: 'Access Banking' },
    { name: 'Ahmed Hassan', role: 'Digital Identity Director', company: 'Secure ID Tech' },
    { name: 'Grace Liu', role: 'Risk Management Head', company: 'Smart Risk Solutions' },
    { name: 'Marcus Bennett', role: 'API Strategy Lead', company: 'Open Banking Plus' },
    { name: 'Elena Popov', role: 'Embedded Finance Director', company: 'Integration Finance' }
  ];

  return (
    <div className="flex-1 bg-[#313338] flex flex-col">
      <div className="h-14 px-4 flex items-center border-b border-[#1f2023] shadow-sm">
        <div className="flex items-center">
          <span className="text-lg mr-3 text-[#949ba4]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12.75c-2.34 0-7 1.17-7 3.5V19h14v-2.75c0-2.33-4.66-3.5-7-3.5zM12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor"/>
            </svg>
          </span>
          <h2 className="text-white font-medium text-base">Community Members</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {members.map((member, index) => (
              <div 
                key={index}
                className="bg-[#2b2d31] rounded-lg p-4 flex items-center hover:bg-[#35373c] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#43B581] flex items-center justify-center text-white font-medium text-lg flex-shrink-0">
                  {member.name.charAt(0)}
                </div>
                <div className="ml-4 min-w-0">
                  <h3 className="text-white font-medium">{member.name}</h3>
                  <p className="text-[#949ba4] text-sm truncate">
                    {member.role} at {member.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
