function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1 text-xs font-semibold text-red-500">{children}</span>
  );
}

export default ErrorMessage;
