import React from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
      <svg width="150" height="150" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e6e6e6"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#38a169"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(90 50 50)"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '18px' , fontWeight : "500" , color : "rgb(54, 149, 54)" }}>Achieved</div>
        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{percentage}%</div>
      </div>
    </div>
  );
};

export default CircularProgress;