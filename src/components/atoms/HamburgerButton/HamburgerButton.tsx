const OpenSVGIcon = () => (
  <svg className="h-6 w-6 dark:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseSVGIcon = () => (
  <svg className="h-6 w-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd" />
  </svg>
);

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

export const HamburgerButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <button className="rounded-md border border-transparent p-2 text-gray-700 outline-none focus:border-gray-400 md:hidden" onClick={onClick}>
      {isOpen ? <CloseSVGIcon /> : <OpenSVGIcon />}
    </button>
  );
};
