import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import type React from "react";

type Props = {
  visible: boolean;
  onClose: () => void;
  onViewPost: (slug: string) => void;
  postSlug: string;
};

const ModalSuccess: React.FC = ({
  visible,
  onClose,
  onViewPost,
  postSlug,
}: Props) => {
  return (
    <Modal isOpen={visible} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Publicación Exitosa
        </ModalHeader>
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
      </ModalContent>
    </Modal>
  );
};

export default ModalSuccess;
