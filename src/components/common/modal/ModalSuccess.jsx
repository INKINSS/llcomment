import { useCallback, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ModalSuccess = ({ visible, onClose, onViewPost, postSlug }) => {
  const handleClose = useCallback(() => {
    // Aseguramos que el foco se maneje correctamente antes de cerrar
    requestAnimationFrame(() => {
      onClose();
    });
  }, [onClose]);

  const handleViewPost = useCallback(() => {
    requestAnimationFrame(() => {
      onViewPost(postSlug);
    });
  }, [onViewPost, postSlug]);

  // Limpieza del foco cuando el componente se desmonta
  useEffect(() => {
    return () => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };
  }, []);

  return (
    <Modal 
      isOpen={visible} 
      onClose={handleClose}
      placement="center"
      isDismissable={false}
      hideCloseButton
      classNames={{
        backdrop: "backdrop-blur-sm backdrop-saturate-150",
        base: "border-1 border-white/20",
        header: "border-b-1 border-white/20",
        footer: "border-t-1 border-white/20",
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Publicación Exitosa
            </ModalHeader>
            <ModalBody>
              <p>¡Felicidades! Tu artículo ha sido publicado.</p>
            </ModalBody>
            <ModalFooter>
              <Button 
                onClick={handleViewPost}
                color="primary"
                variant="solid"
              >
                Ver Publicación
              </Button>
              <Button 
                onClick={handleClose}
                color="secondary"
                variant="flat"
              >
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