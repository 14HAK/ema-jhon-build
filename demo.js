// left Component
const Left = () => {
  return (
    <Common>
      <button>left-Child</button>
    </Common>
  );
};

// Right Component
const Right = () => {
  return (
    <div>
      <Common>
        <button>Right-Child</button>
      </Common>
    </div>
  );
};

// Common Component
const Common = ({ children }) => {
  return (
    <div>
      <h1>Example Of Child Props</h1>
      {children}
    </div>
  );
};
