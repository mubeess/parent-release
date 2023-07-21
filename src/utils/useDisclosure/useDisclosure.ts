import { useState } from 'react';

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return {
    onClose,
    onOpen,
    isOpen,
    toggle,
  };
};

export default useDisclosure;
