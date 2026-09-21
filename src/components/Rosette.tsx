/** Four-point rosette mark used in the brand design. */
export function Rosette({
  size = 15,
  className = 'text-brand-gold',
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-2.6 -2.6 5.2 5.2"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M0,-2.4 L0.55,-0.55 L2.4,0 L0.55,0.55 L0,2.4 L-0.55,0.55 L-2.4,0 L-0.55,-0.55 Z" />
      <circle r="0.45" />
    </svg>
  )
}
