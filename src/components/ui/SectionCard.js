import './SectionCard.css';

const SectionCard = ({ children }) => {
  return (
    <div className="section-card">
      {children}
    </div>
  );
};

export default SectionCard;