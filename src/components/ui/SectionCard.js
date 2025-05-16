const SectionCard = ({ title, children }) => (
  <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6 px-6">
    {title && <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 tracking-tight">{title}</h2>}
    {children}
  </section>
);

export default SectionCard;
