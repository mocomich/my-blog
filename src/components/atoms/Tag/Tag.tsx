type Props = {
  tag: string;
};

export const Tag: React.FC<Props> = ({ tag }) => {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-500 px-3 py-0.5 text-sm text-white  dark:bg-gray-700 dark:text-gray-300" role="listitem">
      {tag}
    </span>
  );
};
