import React from 'react';
import { ModalContainer } from './ModalContainer';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

interface IRequestsForPlacesModalProps {
  openState: boolean;
  handleModal: (val?: boolean) => void;
}

export const RequestsForPlacesModal: React.FC<IRequestsForPlacesModalProps> = ({
  openState,
  handleModal,
}) => {
  return (
    <ModalContainer
      openState={openState}
      handleModal={(val) => handleModal(val)}
      headerTitle="Запросы"
    ></ModalContainer>
  );
};
