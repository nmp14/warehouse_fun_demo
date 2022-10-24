import React, { useEffect, useState } from 'react';
import LeftPanel from '../../component/LeftPanel/LeftPanel';
import RightPanel from '../../component/RightPanel/RightPanel';
import { Companies } from '../../types/interface';
import companyData from './company.json';
import './Dashboard.scss';


const Dashboard = () => {
  const [companies, setCompanies] = useState<Companies[]>([]);
  const [showPanel, setShowPanel] = useState<boolean>(true);
  const [activeCompany, setActiveCompany] = useState<Companies | undefined>(undefined);
  
  const handlePanelBtnClick = () => {
    setShowPanel(!showPanel);
  }

  useEffect(() => {
    //Call companies
    setCompanies(companyData);
  }, []);

  return (
    <div className='dashboard-container'>
      {showPanel && <LeftPanel companyList={companies} setActiveCompany={setActiveCompany}/>}
      <div className={`panel-btn ${showPanel ? '' : 'closed-panel'}`} onClick={() => handlePanelBtnClick()}></div>
      <RightPanel company={activeCompany} showPanel={showPanel}/>
    </div>
  );
};

export default Dashboard;