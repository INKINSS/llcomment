import { type FC } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface ModalSuccessProps {
  visible: boolean;
  onClose: () => void;
  onViewPost: (slug: string) => void;
  postSlug: string;
}

const ModalSuccess: FC<ModalSuccessProps> = ({
  visible,
  onClose,
  onViewPost,
  postSlug,
}) => {
  return (
    <Modal 
      isOpen={visible} 
      onClose={onClose}
      placement="center"
      hideCloseButton={false}
      isDismissable={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1" role="heading">
              Publicación Exitosa
            </ModalHeader>
            <ModalBody>
              <p>¡Felicidades! Tu artículo ha sido publicado.</p>
            </ModalBody>
            <ModalFooter>
              <Button 
                onClick={() => onViewPost(postSlug)} 
                color="primary"
                autoFocus
              >
                Ver Publicación
              </Button>
              <Button 
                color="secondary" 
                onClick={onClose}
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