import Input from "./Input";

export default function NameInput() {
  return (
    <article className="flex flex-col items-center justify-center pt-3 pb-2">
      <div className="flex flex-col items-center justify-between min-w-[320px] w-19 h-[229px]">
        <div className="w-full h-20 p-2 bg-red-500 rounded-t-2xl">
          <p className="text-center text-4xl font-bold text-white">HELLO</p>
          <p className="text-center text-lg text-white">my name is</p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white w-full h-full rounded-b-2xl shadow-lg">
          <Input />
        </div>
      </div>
    </article>
  );
}
