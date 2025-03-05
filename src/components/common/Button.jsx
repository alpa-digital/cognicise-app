import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  href, 
  onClick, 
  primary = false, 
  outline = false,
  className = '' 
}) => {
  const baseStyles = "px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105";
  const primaryStyles = "bg-[#00C29D] text-white hover:bg-[#00C29D]/90";
  const outlineStyles = "border border-[#00C29D] text-[#00C29D] hover:bg-[#00C29D] hover:text-white";
  
  const styles = `${baseStyles} ${primary ? primaryStyles : outline ? outlineStyles : ''} ${className}`;

  if (href) {
    // If it's an internal link
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={styles}>
          {children}
        </Link>
      );
    }
    // If it's an anchor link or external link
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  // If it's a button
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;