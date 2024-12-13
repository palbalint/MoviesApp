import React from "react";
import TitleSearch from "./TitleSearch";
import Reload from "./Reload";
import "../styles/PageHeader.scss";

interface PageHeaderProps {
  onSearch: (query: string) => void;
  onReload: () => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({ onSearch, onReload }) => {
  return (
    <div className="header-container">
      <TitleSearch onSearch={onSearch} />
      <Reload onReload={onReload} />
    </div>
  );
};

export default PageHeader;
