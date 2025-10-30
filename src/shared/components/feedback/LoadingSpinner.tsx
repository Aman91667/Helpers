interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner = ({ size = 32, className = '' }: LoadingSpinnerProps) => (
  <div role="status" className={`inline-block ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd">
        <circle strokeOpacity="0.3" cx="18" cy="18" r="18" stroke="currentColor" />
        <path d="M36 18c0-9.94-8.06-18-18-18" stroke="currentColor">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
    <span className="sr-only">Loading...</span>
  </div>
);

export default LoadingSpinner;
