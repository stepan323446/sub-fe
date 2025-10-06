interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  const lines = content
    .trim()
    .split("\n\n")
    .filter((line) => line.trim() !== "");

  return (
    <>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
};

export default Content;
