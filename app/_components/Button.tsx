interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button className="bg-sky-600 hover:bg-sky-700 cursor-pointer min-w-20 py-1 px-4 rounded-sm text-white">
      {title}
    </button>
  );
}
