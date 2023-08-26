interface ModalProps {
  onClose: () => void;
  className?: string;
  persist?: boolean;
  children: React.ReactNode;
};

export default function Modal({
  onClose,
  className,
  persist,
  children
}: ModalProps) {
  return (
    <>
      <div
        className="fixed inset-0 w-full h-full dark:bg-neutral-500 bg-darkTheme-950 opacity-60 z-[600]"
        onClick={() => {
          if(!persist) {
            onClose();
          }
        }}
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