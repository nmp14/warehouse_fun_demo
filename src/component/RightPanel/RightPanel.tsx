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

  return (
    <div className='right-panel'>
      {company ? (
        <div>#{company.numWarehouses} Warehouses</div>
      ) : (
        <div className={showPanel ? '' : 'closed-panel'}>You have not selected a company yet!</div>
      )}
    </div>
  );
};

export default RightPanel;