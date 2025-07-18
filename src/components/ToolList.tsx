export default function ToolList({ tools }: { tools: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tools.map((tool, i) => (
        <li
          key={i}
          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}
