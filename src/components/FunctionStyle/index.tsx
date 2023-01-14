interface Props {
  label: string;
  classname?: string;
}

export function FunctionStyle({ label, classname }: Props) {
  return (
    <span className={`text-gray-500 font-consolas italic px-2 ${classname}`}>
      {label}
    </span>
  );
}
