import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ModalSuccess = ({ visible, onClose, onViewPost, postSlug }) => {
  return (
    <Modal backdrop='opaque' isOpen={visible} onOpenChange={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Publicación Exitosa</ModalHeader>
            <ModalBody>
              <p>¡Felicidades! Tu artículo ha sido publicado.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => onViewPost(postSlug)} color="primary">
                Ver Publicación
              </Button>
              <Button color="secondary" onClick={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;