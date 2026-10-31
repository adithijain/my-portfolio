import Link from "next/link";

/* One button used everywhere. Pass external for links that open a new tab. */
export default function Button({
  href,
  variant = "primary",
  small = false,
  external = false,
  className = "",
  children,
}) {
  const classes = `btn btn-${variant} ${small ? "btn-small" : ""} ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href.startsWith("/") && !href.endsWith(".pdf")) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
