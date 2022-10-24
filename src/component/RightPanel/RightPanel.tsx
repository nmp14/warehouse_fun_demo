import React from 'react';
import { Companies } from '../../types/interface';
import './RightPanel.scss';

interface RightPanelProps {
  company?: Companies;
  showPanel: boolean;
}

const RightPanel = (props: RightPanelProps) => {
  const {
    company,
    showPanel,
  } = props;

  const capitlizeCompanyName = (companyName: string): string => {
    const firstLetter = companyName?.[0];
    const rest = companyName?.substring(1);

    return firstLetter?.toUpperCase() + rest;
  }

  return (
    <div className={`right-panel ${showPanel ? '' : 'closed-panel'}`}>
      {company ? (
        <>
          <h2>{capitlizeCompanyName(company.name)}</h2>
          <div>{company.numWarehouses} Warehouses Managed</div>
        </>
      ) : (
        <h2>You have not selected a company yet!</h2>
      )}
    </div>
  );
};

export default RightPanel;