import React from 'react';
import { Modal, Button, TextContent, Text } from '@patternfly/react-core';
import { OUIAProps, componentOuiaProps } from '@kogito-apps/common';
import JobsBulkList from '../JobsBulkList/JobsBulkList';
import { IJobOperation } from '../../Templates/JobsManagementPage/JobsManagementPage';

interface IOwnProps {
  actionType: string;
  modalTitle: JSX.Element;
  modalContent: string;
  handleModalToggle: () => void;
  isModalOpen: boolean;
  jobOperations?: IJobOperation;
}
const JobsCancelModal: React.FC<IOwnProps & OUIAProps> = ({
  actionType,
  modalContent,
  modalTitle,
  isModalOpen,
  handleModalToggle,
  jobOperations,
  ouiaId,
  ouiaSafe
}) => {
  return (
    <Modal
      variant="small"
      title=""
      header={modalTitle}
      isOpen={isModalOpen}
      onClose={handleModalToggle}
      aria-label={`${actionType} Modal`}
      aria-labelledby={`${actionType} Modal`}
      actions={[
        <Button
          key="confirm-selection"
          variant="primary"
          onClick={handleModalToggle}
        >
          OK
        </Button>
      ]}
      {...componentOuiaProps(ouiaId, 'jobs-cancel-modal', ouiaSafe)}
    >
      {modalContent.length > 0 ? (
        <TextContent>
          <Text>{modalContent}</Text>
        </TextContent>
      ) : (
        <JobsBulkList operationResult={jobOperations} />
      )}
    </Modal>
  );
};
export default JobsCancelModal;
