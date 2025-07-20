export default function ResultSection({
  results,
}: {
  results: { type: "image" | "link" | "text"; content: string }[];
}) {
  return (
    <div className="space-y-1">
      <h4 className="text-md font-semibold text-gray-700">Results</h4>
      {results.map((res, idx) => {
        if (res.type === "image") {
          return <img key={idx} src={res.content} alt={`Result ${idx}`} className="rounded shadow w-full max-w-md" />;
        }
        if (res.type === "link") {
          return (
            <a
              key={idx}
              href={res.content}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Report
            </a>
          );
        }
        return (
          <p key={idx} className="text-sm text-gray-600">
            {res.content}
          </p>
        );
      })}
    </div>
  );
}
