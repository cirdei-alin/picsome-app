type ProductPriceProps = {
  price: number;
};

export function ProductPrice({ price }: ProductPriceProps) {
  return (
    <p className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-black text-slate-950 shadow-lg">
      ${price.toFixed(2)}
    </p>
  );
}