'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAllCampuses } from '@/data/schoolData';

export default function CampusDiagram() {
  const campuses = getAllCampuses();
  const mainCampus = campuses[0];
  const subCampuses = campuses.slice(1);

  return (
    <div className="campus-diagram-container">
      <div className="campus-diagram">
        {/* Connection Lines Container */}
        <svg className="connection-lines" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
          {/* Decorative background circles */}
          <circle cx="600" cy="100" r="95" className="bg-circle main-bg" />
          
          {/* Main vertical line from main campus */}
          <line x1="600" y1="190" x2="600" y2="280" className="line line-main" />
          
          {/* First tier horizontal line */}
          <line x1="200" y1="280" x2="1000" y2="280" className="line line-branch" />
          
          {/* First tier vertical connections (3 campuses) */}
          <line x1="280" y1="280" x2="280" y2="360" className="line line-branch" />
          <line x1="600" y1="280" x2="600" y2="360" className="line line-branch" />
          <line x1="920" y1="280" x2="920" y2="360" className="line line-branch" />
          
          {/* Decorative circles for first tier */}
          <circle cx="280" cy="430" r="80" className="bg-circle sub-bg" />
          <circle cx="600" cy="430" r="80" className="bg-circle sub-bg" />
          <circle cx="920" cy="430" r="80" className="bg-circle sub-bg" />

          {/* Second tier connections from left node */}
          <line x1="280" y1="530" x2="400" y2="580" className="line line-branch" />
          <line x1="400" y1="580" x2="400" y2="630" className="line line-branch" />
          
          {/* Second tier connections from center node */}
          <line x1="600" y1="530" x2="800" y2="580" className="line line-branch" />
          <line x1="800" y1="580" x2="800" y2="630" className="line line-branch" />
          
          {/* Decorative circles for second tier */}
          <circle cx="400" cy="690" r="80" className="bg-circle sub-bg" />
          <circle cx="800" cy="690" r="80" className="bg-circle sub-bg" />
        </svg>

        {/* Main Campus */}
        <div className="campus-row row-main">
          <Link href={`/campus/${mainCampus.id}`} className="campus-node main-campus-node">
            <div className="node-wrapper">
              <div className="campus-node-circle main">
                <div className="node-glow"></div>
                <div className="campus-node-icon" style={{ position: 'relative' }}>
                  {mainCampus.id === 1 ? (
                    <Image
                      src="/images/logo.jpg"
                      alt="Universal Oxford Groupe"
                      width={200}
                      height={200}
                      style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: '0 10px 30px rgba(245, 201, 58, 0.4)'
                      }}
                      unoptimized
                    />
                  ) : mainCampus.icon}
                </div>
              </div>
              <div className="campus-node-info">
                <h3>{mainCampus.name}</h3>
                <p className="campus-location">{mainCampus.location}</p>
                <span className="campus-badge">All 12 Languages</span>
              </div>
            </div>
          </Link>
        </div>

        {/* First Tier Sub-Campuses (3 nodes) */}
        <div className="campus-row row-tier-1">
          {subCampuses.slice(0, 3).map((campus, index) => (
            <Link 
              key={campus.id} 
              href={`/campus/${campus.id}`} 
              className="campus-node sub-campus-node"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="node-wrapper">
                <div className="campus-node-circle sub">
                  <div className="node-glow"></div>
                  <div className="campus-node-icon">{campus.icon}</div>
                </div>
                <div className="campus-node-info">
                  <h4>{campus.name}</h4>
                  <p className="campus-location">{campus.location}</p>
                  <span className="campus-badge">All Languages</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Tier Sub-Campuses (2 nodes) */}
        <div className="campus-row row-tier-2">
          {subCampuses.slice(3, 5).map((campus, index) => (
            <Link 
              key={campus.id} 
              href={`/campus/${campus.id}`} 
              className="campus-node sub-campus-node"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="node-wrapper">
                <div className="campus-node-circle sub">
                  <div className="node-glow"></div>
                  <div className="campus-node-icon">{campus.icon}</div>
                </div>
                <div className="campus-node-info">
                  <h4>{campus.name}</h4>
                  <p className="campus-location">{campus.location}</p>
                  <span className="campus-badge">All Languages</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
