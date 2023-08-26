interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({
  onClose,
  children
}: ModalProps) {
  return (
    <>
      <div
        className="fixed inset-0 w-full h-full dark:bg-neutral-500 bg-darkTheme-950 opacity-60 z-[600]"
        onClick={onClose}
      ></div>
      <div
        className={`
          w-fit h-fit
          dark:bg-darkTheme-600
          shadow-sm rounded-lg m-auto fixed inset-0 z-[700] outline-none focus:outline-none
        `}
      >
        <div className="relative h-full rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
};