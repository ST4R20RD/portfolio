export function Slide({ children }: any) {
  return (
    <div className="h-[calc(100vh-74px)] flex flex-col justify-center">
      <div className="snap-center">{children}</div>
    </div>
  );
}
