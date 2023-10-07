import React from 'react';
import Button from 'elements/Button';

export default function IconText() {
  const stayStyle = { color: '#3252DF', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' };
  const cationStyle = { color: '#152C5B', fontWeight: 'bold', textDecoration: 'none', fontSize: '20px' };

  return (
    <Button
      className='brand-text-icon'
      href=''
      type='link'
      style={{ textDecoration: 'none' }}
    >
      <span style={stayStyle}>Stay</span>
      <span className='text-gray-900' style={cationStyle}>cation.</span>
    </Button>
  );
}
