import React from 'react';
import { members } from '../data/members';

export default function MembersList() {
  return (
    <div className="h-full bg-[#313338] text-white">
      <div className="h-12 px-4 flex items-center border-b border-[#1f2023]">
        <h2 className="font-medium">Community Members</h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((user) => (
            <div key={user.id} className="bg-[#2b2d31] rounded-lg p-4 hover:bg-[#35373c] transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-[#383a40]"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-[#949ba4]">{user.bio}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {user.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#383a40] text-[#949ba4] rounded-lg text-xs border border-[#4a4d55] hover:bg-[#404348] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#949ba4] mt-2">
                  Joined {user.joinedAt.toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}