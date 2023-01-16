export function Slide({ children }: any) {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="snap-center h-full">{children}</div>
    </div>
  );
}
