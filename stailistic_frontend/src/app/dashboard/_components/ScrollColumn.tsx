export default function ScrollableBox({children}:any) {
  return (
    <div className="bg-stailistic-blue-faint shadow-2xl mx-2 w-fill h-min-fit overflow-y-auto hover:scrollbar-thin scrollbar-none [direction:rtl]">
        <div className="[direction:ltr]">
            {children}
        </div>
    </div>
  );
}