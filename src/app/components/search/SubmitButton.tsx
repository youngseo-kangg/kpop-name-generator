type SubmitButtonProps = {
  inputAvailable: boolean;
};

function SubmitButton({ inputAvailable }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={`${
        inputAvailable ? "text-red-500 hover:text-red-600" : "text-gray-300"
      } transition-colors pr-1`}
      aria-label="Submit"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

export default SubmitButton;
