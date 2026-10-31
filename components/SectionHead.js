export default function SectionHead({ title, sub, page = false }) {
  const Tag = page ? "h1" : "h2";
  return (
    <div className="section-head">
      <Tag className={page ? "page-title" : "section-title"}>{title}</Tag>
      {sub && <span className="section-sub">{sub}</span>}
    </div>
  );
}
