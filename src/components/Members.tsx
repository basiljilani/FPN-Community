import React from 'react';

interface Member {
  name: string;
  role: string;
  company: string;
  image: string;
  expertise?: string[];
}

export default function Members() {
  const members: Member[] = [
    { name: 'David Anderson', role: 'Chief Risk Officer', company: 'Global Bank Corp', expertise: ['Risk Management', 'Financial Planning'], image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Maria Rodriguez', role: 'Head of Innovation', company: 'FinTech Innovations', expertise: ['Digital Innovation', 'Strategy'], image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Alex Thompson', role: 'Compliance Director', company: 'RegTech Solutions', expertise: ['Regulatory Compliance', 'Policy'], image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Sarah Chen', role: 'AI Research Lead', company: 'ML Finance', expertise: ['Machine Learning', 'AI Strategy'], image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'James Wilson', role: 'Chief Strategy Officer', company: 'Digital Banking Co', expertise: ['Strategic Planning', 'Digital Banking'], image: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Emily Brown', role: 'Data Privacy Head', company: 'SecureBank', expertise: ['Data Protection', 'GDPR'], image: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'Michael Zhang', role: 'ML Engineering Director', company: 'AI Finance Systems', expertise: ['ML Engineering', 'AI Development'], image: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Lisa Patel', role: 'Digital Transformation Lead', company: 'Future Finance', expertise: ['Digital Strategy', 'Change Management'], image: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { name: 'Robert Kim', role: 'Blockchain Head', company: 'DeFi Solutions', expertise: ['Blockchain', 'DeFi'], image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Anna Kowalski', role: 'Risk Analytics Director', company: 'Smart Risk AI', expertise: ['Risk Analytics', 'AI'], image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { name: 'Carlos Mendoza', role: 'Open Banking Lead', company: 'API Banking Tech', expertise: ['Open Banking', 'APIs'], image: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { name: 'Sophie Laurent', role: 'Innovation Strategy', company: 'NextGen Finance', expertise: ['Innovation', 'Strategy'], image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Thomas Weber', role: 'RegTech Solutions Head', company: 'Compliance AI', expertise: ['RegTech', 'Compliance'], image: 'https://randomuser.me/api/portraits/men/13.jpg' },
    { name: 'Nina Petrova', role: 'Payment Systems Director', company: 'Digital Pay Solutions', expertise: ['Payments', 'Digital Systems'], image: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { name: 'Richard Chang', role: 'Machine Learning Lead', company: 'Predictive Finance', expertise: ['ML', 'Predictive Analytics'], image: 'https://randomuser.me/api/portraits/men/15.jpg' },
    { name: 'Isabella Santos', role: 'Financial Inclusion Head', company: 'Access Banking', expertise: ['Financial Inclusion', 'Banking'], image: 'https://randomuser.me/api/portraits/women/16.jpg' },
    { name: 'Ahmed Hassan', role: 'Digital Identity Director', company: 'Secure ID Tech', expertise: ['Digital Identity', 'Security'], image: 'https://randomuser.me/api/portraits/men/17.jpg' },
    { name: 'Grace Liu', role: 'Risk Management Head', company: 'Smart Risk Solutions', expertise: ['Risk Management', 'Analytics'], image: 'https://randomuser.me/api/portraits/women/18.jpg' },
    { name: 'Marcus Bennett', role: 'API Strategy Lead', company: 'Open Banking Plus', expertise: ['API Design', 'Strategy'], image: 'https://randomuser.me/api/portraits/men/19.jpg' },
    { name: 'Elena Popov', role: 'Embedded Finance Director', company: 'Integration Finance', expertise: ['Embedded Finance', 'Integration'], image: 'https://randomuser.me/api/portraits/women/20.jpg' },
    { name: 'John Mitchell', role: 'Quantum Computing Lead', company: 'Quantum Finance', expertise: ['Quantum Computing', 'Financial Modeling'], image: 'https://randomuser.me/api/portraits/men/21.jpg' }
  ];

  return (
    <div className="flex-1 bg-[#313338] flex flex-col h-screen">
      <div className="h-14 px-4 flex items-center border-b border-[#1f2023] shadow-sm">
        <div className="flex items-center">
          <span className="text-lg mr-3 text-[#949ba4]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12.75c-2.34 0-7 1.17-7 3.5V19h14v-2.75c0-2.33-4.66-3.5-7-3.5zM12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="currentColor"/>
            </svg>
          </span>
          <h2 className="text-white font-medium">Members</h2>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-[#2b2d31] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-2xl object-cover border-2 border-purple-500"
                    style={{ borderRadius: '1rem' }}
                  />
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-lg border-2 border-[#2b2d31]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg truncate">{member.name}</h3>
                  <p className="text-[#b5bac1] text-sm truncate">{member.role}</p>
                  <p className="text-[#949ba4] text-sm mt-1 truncate">{member.company}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.expertise?.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1.5 text-xs rounded-lg bg-[#404249] text-[#b5bac1] border border-[#4d4f55] hover:bg-[#464952] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
