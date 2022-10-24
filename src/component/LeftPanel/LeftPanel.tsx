import React from 'react';
import { Companies } from '../../types/interface';
// import data from './project.json';
// import ProjectCard from './dwadwad';
import './LeftPanel.scss';

interface LeftPanelProps {
  companyList: Companies[];
  setActiveCompany: Function;
}


const LeftPanel = (props: LeftPanelProps) => {
  const {
    companyList,
    setActiveCompany,
  } = props;

  const capitlizeCompanyName = (companyName: string): string => {
    const firstLetter = companyName?.[0];
    const rest = companyName?.substring(1);

    return firstLetter?.toUpperCase() + rest;
  }

  const handleCompanyClick = (company: Companies) => {
    setActiveCompany(company);
  }

  return (
    <div className='left-panel'>
      {companyList.map((company) => (
        <div className='company-name'
          onClick={() => handleCompanyClick(company)}
        >
          {capitlizeCompanyName(company.name)}
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;