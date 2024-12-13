import React from "react";

interface ReloadProps {
  onReload: () => void;
}

const Reload: React.FC<ReloadProps> = ({ onReload }) => {
  return <button onClick={onReload}>Újratöltés</button>;
};

export default Reload;
