type NameListProps = {
  data: string[];
};

export default function NameList({ data }: NameListProps) {
  return (
    <div>
      <ul>
        {data.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
