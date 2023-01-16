export function Slide({ children }: any) {
  return (
    <div className="snap-start snap-always h-screen flex flex-col justify-center">{children}</div>
  );
}
